<template>
  <div class="signin">
    <div class="signin__header">
      <signin-header :data="headerData" :height="headerHeight"/>
    </div>
    <div class="signin__content"
      :style="{paddingTop: headerHeight + 'rpx', paddingBottom: btnHeight + 'rpx'}">
      <signin-content 
        :data="contentData"
        :loading-active="hasMore"
        @load-more="onLoadMore" />
    </div>
    <div class="signin__signin">
      <signin-footer :btn-height="btnHeight" />
    </div>
    <at-loading :show="loading" />
    <at-toast :show="showToast" :title="toastText" />
  </div>
</template>

<script>
  import SigninHeader from '@/components/signin/signin-header';
  import SigninContent from '@/components/signin/signin-content';
  import SigninFooter from '@/components/signin/signin-footer';
  import { changeAttndStatusService, getAttndService } from '@/services/attnd.service';
  import { getSigninsService, getSigninService, signinService } from '@/services/signin.service';
  import { atLog } from '@/utils/at-log';
  import AtLoading from '@/components/at-loading';
  import AtToast from '@/components/at-toast';

  export default {
    data() {
      return {
        headerHeight: 220, // rpx
        btnHeight: 90, // rpx
        loading: false,
        showToast: false,
        toastText: '',

        headerData: {},
        contentData: [],
        hasMore: true,

        attndStatus: 0,
        belonging: false,
        signinStatus: -1,

        self: {

        }
      }
    },

    components: {
      'signin-header': SigninHeader,
      'signin-content': SigninContent,
      'signin-footer': SigninFooter,
      'at-loading': AtLoading,
      'at-toast': AtToast
    },

    async onLoad() {
      try {
        if (this.loading) return;
        let passwd = this.$root.$mp.query.passwd;
        this.loading = true;

        // 获取考勤信息，包括考勤状态和考勤归属
        await this.getAttndInfo(passwd);

        // 获取个人签到信息
        await this.getSignin(passwd);

        


        setTimeout(() => { this.loading = false; }, 500);
      } catch (e) {
        setTimeout(() => { this.loading = false; }, 500);
        this.showToast = true;
        this.toastText = String(e);
        setTimeout(() => { this.showToast = false; }, 1000);
      }
    },

    methods: {
      async onLoadMore() {

      },

      // 获取考勤信息
      async getAttndInfo(passwd) {
        let result = await getAttndService({ passwd });
        if (result.code === 2000) {
          let { payload } = result.data;
          this.headerData = payload;
          this.attndStatus = payload.status;
          this.belonging = result.data.belonging;
        }
        throw new Error('获取考勤信息失败');
      },

      // 获取签到列表
      async getSigninList() {

      },

      // 获取个人签到信息
      async getSignin(passwd) {
        let result = await getSignin({ passwd });
        if (result.code === 2000) {
          // 已签到
        } else if (result.code === 3001) {
          // 还没签到
        }
        throw new Error('获取个人签到信息失败');
      },

      // 签到
      async signin() {

      },

      // 结束考勤
      async endAttnd() {

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
