<template>
  <div class="form">
    <!-- 发起考勤 -->
    <div class="form__wrapper" v-if="type===PageTypes.RELEASE">
      <div class="form__title">
        <p class="form__title--1">输入考勤名称</p>
        <p class="form__title--2">* 考勤范围是以你为中心的方圆200米</p>
        <p class="form__title--2">* 发布考勤后会生成一个口令，请展示给参与此次签到的人</p>
      </div>
      <div class="form__input">
        <input type="text" placeholder="例如：计网-计科151" placeholder-style="color:#bababa" focus="true">
      </div>
      <div class="form__release">
        <p>立即发起</p>
      </div>
    </div>

    <!-- 输入口令 -->
    <div class="form__wrapper" v-if="type===PageTypes.PASS_WD">
      <div class="form__title">
        <p class="form__title--1">输入口令</p>
        <p class="form__title--2">* 请向考勤发起者索取考勤口令</p>
      </div>
      <div class="form__input">
        <input type="text" placeholder="例如：计网-计科151" placeholder-style="color:#bababa" focus="true">
      </div>
      <div class="form__release">
        <p>确认</p>
      </div>
    </div>

    <!-- 个人信息 -->
    <div class="form__wrapper" v-if="type===PageTypes.SELF">
      <div class="form__title">
        <p class="form__title--1">个人信息</p>
        <p class="form__title--2">* 建议使用真实姓名以方便考勤</p>
      </div>
      <div class="form__input">
        <input type="text" 
          placeholder="姓名（必填）" 
          placeholder-style="color:#bababa"
          v-model="name">
      </div>
      <div class="form__input">
        <input type="text"
        placeholder="ID/学号/工号"
        placeholder-style="color:#bababa"
        v-model="stuId">
      </div>
      <div class="form__release" @click="updateUserInfo">
        <p>保存</p>
      </div>
    </div>
    
    <!-- 电子邮箱 -->
    <div class="form__wrapper" v-if="type===PageTypes.EMAIL">
      <div class="form__title">
        <p class="form__title--1">电子邮箱</p>
        <p class="form__title--2">* 电子邮箱用于导出考勤 Excel 表格</p>
      </div>
      <div class="form__input">
        <input type="text" placeholder="Email" placeholder-style="color:#bababa" focus="true">
      </div>
      <div class="form__release">
        <p>保存</p>
      </div>
    </div>

    <!-- 授权管理 -->
    <div class="form__wrapper" v-if="type===PageTypes.AUTH">
      <div class="form__title">
        <p class="form__title--1">授权</p>
        <p class="form__title--2">* 小程序需要获取你的地理位置</p>
      </div>
      <div class="form__release" @click="onAuthConfirm">
        <p>进入授权页</p>
      </div>
    </div>
    <at-loading :show="showLoading" :title="loadingText"/>
    <at-toast :show="showToast" :title="toastText"/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { PageTypes } from '@/utils/consts';
  import AtLoading from '@/components/atLoading';
  import AtToast from '@/components/atToast';
  import { atLog } from '@/utils/atLog';
  import { getUserInfoService, updateUserInfoService } from '@/services/info.service';

  export default {
    data() {
      return {
        type: -1,
        PageTypes,
        showLoading: false,
        loadingText: '请稍后...',
        showToast: false,
        toastText: '',

        name: '',
        stuId: '',
        email: ''
      }
    },
    components: {
      'at-loading': AtLoading,
      'at-toast': AtToast
    },
    methods: {
      initData() {
        switch (this.type) {
          case PageTypes.SELF: 
            this.getUserInfo();
            break;
        }
      },
      onAuthConfirm() {
        wx.openSetting()
      },
      async getUserInfo() {
        if (this.showLoading) return;
        this.showLoading = true;

        let result = await getUserInfoService();
        this.showLoading = false;

        switch (result.code) {
          case 3001: return;
          case 2000: 
            let { name, stuId } = result.data.payload;
            this.name = name;
            this.stuId = stuId;
            return;
          default:
            this.showToast = true;
            this.toastText = '获取信息失败';
            setTimeout(() => {
              this.showToast = false;
            }, 1000);
            return;
        }
      },
      async updateUserInfo() {
        if (this.showLoading) return;
        this.showLoading = true;

        let result = await updateUserInfoService({
          name: this.name,
          stuId: this.stuId
        });
        this.showLoading = false;

        switch (result.code) {
          case 2000:
            this.globalData.isUserInfoUpdated = true;
            wx.navigateBack();
            return;
          default:
            this.showToast = true;
            this.toastText = '提交失败';
            setTimeout(() => {
              this.showToast = false;
            }, 1000);
            return;
        }
      }
    },
    onLoad() {
      console.log(Vue.prototype.globalData.pageType);
      this.type = Vue.prototype.globalData.pageType;
      this.initData();
    }
  }
</script>

<style lang="less">
  @import "../../assets/style/_variables.less";

  .form {
    &__wrapper {
      width: 100%;
      padding: 100rpx 60rpx 0 60rpx;
    }
    &__title {
      margin-bottom: 100rpx;
      &--1 {
        font-size: 60rpx;
      }
      &--2 {
        font-size: 30rpx;
        color: @font2;
        margin-top: 20rpx;
      }
    }
    &__input {
      padding: 0 0 15rpx 0;
      border-bottom: 1rpx solid @border;
      margin-top: 36rpx;
      width: 100%;
      input {
        width: 100%;
        height: 60rpx;
        font-size: 40rpx;
      }
    }
    &__release {
      margin-top: 40rpx;
      width: 100%;
      height: 100rpx;
      font-size: 40rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50rpx;
      background: @theme;
      color: white;
      &:active { background: @greenActive; }
    }
  }
</style>
