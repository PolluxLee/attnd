<template>
  <div class="form">
    <!-- 发起考勤 -->
    <div class="form__wrapper" v-if="isAttnd">
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
    <div class="form__wrapper" v-if="isSign">
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
    <div class="form__wrapper" v-if="isSelf">
      <div class="form__title">
        <p class="form__title--1">个人信息</p>
        <p class="form__title--2">* 建议使用真实姓名以方便考勤</p>
      </div>
      <div class="form__input">
        <input type="text" placeholder="姓名" placeholder-style="color:#bababa" focus="true">
      </div>
      <div class="form__input">
        <input type="text" placeholder="ID/学号/工号" placeholder-style="color:#bababa">
      </div>
      <div class="form__release">
        <p>保存</p>
      </div>
    </div>
    
    <!-- 电子邮箱 -->
    <div class="form__wrapper" v-if="isEmail">
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
    <div class="form__wrapper" v-if="isAuth">
      <div class="form__title">
        <p class="form__title--1">授权</p>
        <p class="form__title--2">* 小程序需要获取你的地理位置</p>
      </div>
      <div class="form__release" @click="onAuthConfirm">
        <p>进入授权页</p>
      </div>
    </div>

  </div>
</template>

<script>
  import { PageTypes } from "../../utils/consts.js"
  export default {
    data() {
      return {
        type: -1
      }
    },
    onLoad() {
      this.type = +this.$root.$mp.query.type
    },
    computed: {
      isError() { return this.type === -1 },
      isAttnd() { return this.type === PageTypes.RELEASE },
      isSign() { return this.type === PageTypes.PASS_WD },
      isSelf() { return this.type === PageTypes.SELF },
      isEmail() { return this.type === PageTypes.EMAIL },
      isAuth() { return this.type === PageTypes.AUTH }
    },
    methods: {
      onAuthConfirm() {
        wx.openSetting()
      }
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
