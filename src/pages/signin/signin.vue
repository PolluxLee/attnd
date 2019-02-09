<template>
  <div class="signin">
    <div class="signin__header">
      <signin-header
        :data="headerData"
        :height="headerHeight"
        @refresh="onRefresh"/>
    </div>
    <div class="signin__content"
      :style="{paddingTop: headerHeight + 'rpx', paddingBottom: btnHeight + 'rpx'}">
      <signin-content 
        :data="contentData"
        :loading-active="hasMore"
        @load-more="onLoadMore" />
    </div>
    <div class="signin__signin">
      <signin-footer
        :btn-height="btnHeight"
        :belonging="belonging"
        :attndStatus="attndStatus"
        :signinStatus="signinStatus"
        @update-attnd="onEndAttnd"
        @signin="onSignin"/>
    </div>
    <at-loading :show="showLoading" />
    <at-toast :show="showToast" :title="toastText" />
  </div>
</template>

<script>
  import SigninHeader from '@/components/signin/signin-header';
  import SigninContent from '@/components/signin/signin-content';
  import SigninFooter from '@/components/signin/signin-footer';
  import { updateAttndService, getAttndService } from '@/services/attnd.service';
  import { getSigninService, signinService, getSigninPeopleService } from '@/services/signin.service';
  import { getLocationService } from '@/services/location.service';
  import { atLog } from '@/utils/at-log';
  import AtLoading from '@/components/at-loading';
  import AtToast from '@/components/at-toast';
  import { debounce } from '@/utils/debounce';

  export default {
    data() {
      return {
        headerHeight: 220, // rpx
        btnHeight: 90, // rpx
        showLoading: false,
        showToast: false,
        toastText: '',
        loading: false,
        errOccurred: false,

        headerData: {},
        contentData: [],
        hasMore: true,

        passwd: '',
        belonging: true,
        attndStatus: 0,
        signinStatus: -1,
      }
    },

    components: {
      'signin-header': SigninHeader,
      'signin-content': SigninContent,
      'signin-footer': SigninFooter,
      'at-loading': AtLoading,
      'at-toast': AtToast
    },

    onLoad() {
      this.reset();
      this.passwd = this.$root.$mp.query.passwd;
      this.init();
    },

    methods: {

      // 因为页面销毁时 vue 生命周期没有走 destroyed，所以需要重置 data
      reset() {
        this.showLoading = false;
        this.showToast = false;
        this.toastText = '';
        this.loading = false;
        this.errOccurred = false;

        this.headerData = {};
        this.contentData = [];
        this.hasMore = true;

        this.passwd = '';
        this.belonging = true;
        this.attndStatus = 0;
        this.signinStatus = -1;
      },

      async init() {
        this.errOccurred = false;
        if (this.showLoading) return;
        this.showLoading = true;

        await this.getBaseInfo();

        this.showLoading = false;
      },

      // 获取基本信息包括考勤状态与个人签到状态
      async getBaseInfo() {
        try {
          if (this.loading) return;
          this.loading = true
          wx.showNavigationBarLoading();

          let [res1, res2, res3] = await Promise.all([
            getAttndService({ passwd: this.passwd }), // 获取考勤信息，包括考勤状态和考勤归属
            getSigninService({ passwd: this.passwd }), // 获取个人签到信息
          ]);

          this.headerData = res1.data.payload;
          this.attndStatus = res1.data.payload.status;
          this.belonging = res1.data.belonging;

          if (res2.code === 2000) { // 已签到
            this.signinStatus = res2.data.payload.status;
          } else if (res2.code === 3001) { // 还没签到
            this.signinStatus = -1;
          }

          this.loading = false;
          wx.hideNavigationBarLoading();
        } catch (err) {
          this.errOccurred = true;
          this.loading = false;
          wx.hideNavigationBarLoading();
          this.toShowToast();
        }
      },

      // 签到
      async signin() {
        // 获取前置信息出现错误
        if (this.errOccurred) {
          atLog.warn('signin-page', '获取前置信息出现错误导致无法签到');
          return;
        }
        
        // 由考勤所属和个人签到状态共同决定能否签到
        if (!(!this.belonging && this.signinStatus < 0)) {
          atLog.warn('signin-page', '只有非发布者并且尚未签到者可签到');
          return;
        }

        try {
          if (this.showLoading || this.loading) return;
          this.loading = true;
          wx.showNavigationBarLoading();

          // 获取地理位置
          let location = await getLocationService();
          if (!location) {
            wx.navigateTo({ url: `../form/${PageTypes.AUTH}/main` });
            this.loading = false;
            wx.hideNavigationBarLoading();
            return;
          }

          // code == 3002 时表示已签到
          let { code } = await signinService({ passwd: this.passwd, location });
          this.loading = false;
          wx.hideNavigationBarLoading();
          this.getBaseInfo();

        } catch (e) {
          this.loading = false;
          wx.hideNavigationBarLoading();
          this.toShowToast();
        }
      },

      // 结束考勤
      async endAttnd() {
        // 获取前置信息出现错误
        if (this.errOccurred) {
          atLog.warn('signin-page', '获取前置信息出现错误导致无法签到');
          return;
        }

        // 由考勤所属和考勤状态共同决定能否签到
        if (!(this.belonging && this.attndStatus === 1)) {
          atLog.warn('signin-page', '只有非发布者并且尚未签到者可签到');
          return;
        }

        try {
          if (this.showLoading || this.loading) return;
          this.loading = true;
          wx.showNavigationBarLoading();

          let { code } = await updateAttndService({ passwd: this.passwd, status: 0 });
          if (code === 2000) {
            this.attndStatus = 0;
          }
          this.getBaseInfo();

          this.loading = false;
          wx.hideNavigationBarLoading();
        } catch (e) {
          this.loading = false;
          wx.hideNavigationBarLoading();
          this.toShowToast();
        }
      },

      onSignin() {
        wx.showModal({
          title: '签到',
          content: '签到成功后不可取消并且只能够签到一次，是否继续？',
          success: res => {
            if (res.confirm) {
              this.signin();
            }
          }
        });
      },

      onEndAttnd() {
        wx.showModal({
          title: '结束考勤',
          content: '结束考勤后仍可签到，但会被视为迟到，是否继续？',
          success: res => {
            if (res.confirm) {
              this.endAttnd();
            }
          }
        });
      },

      onRefresh: debounce(function(){
        this.getBaseInfo();
      } ,1000, true),

      toShowToast(title = '出现了一点问题 :(', delay = 1500) {
        this.toastText = title;
        this.showToast = true;
        setTimeout(() => {
          this.showToast = false;
        }, delay);
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/style/_variables.less";

  .signin {
    position: relative;
    &__header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 100;
      background: white;
    }
    &__signin {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      z-index: 100;
    }
  }
</style>
