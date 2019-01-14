<template>
  <div class="me">
    <div class="me__info" @click="onSelfClick">
      <p class="me__info--name">纸纸纸盆</p>
      <p class="me__info--id">1506100006</p>
    </div>
    <div class="me__break"></div>

    <!-- 电子邮箱 -->
    <div class="me-item" @click="onEmailClick">
      <div class="me-item__title">
        <p>电子邮箱</p>
      </div>
    </div>

    <div class="me__break"></div>

    <!-- 授权管理 -->
    <div class="me-item" @click="onAuthClick">
      <div class="me-item__title">
        <p>授权管理</p>
      </div>
    </div>

    <!-- 关于我们 -->
    <div class="me-item" @click="onAboutClick">
      <div class="me-item__title">
        <p>关于我们</p>
      </div>
    </div>

  </div>
</template>

<script>
  import { pageType } from "../../utils/consts.js"
  export default {
    data() {
      return {

      }
    },
    methods: {
      onSelfClick() { wx.navigateTo({ url: `../form/main?type=${pageType.SELF}`}) },
      onEmailClick() { wx.navigateTo({ url: `../form/main?type=${pageType.EMAIL}`}) },
      onAuthClick() { wx.navigateTo({ url: `../form/main?type=${pageType.AUTH}`}) },
      onAboutClick() {}
    }
  }
</script>

<style lang="less">
  @import "../../assets/style/_variables.less";
  page {
    width: 100%;
    height: 100%;
    background-color: @bg;
  }
  .me {
    p { letter-spacing: 1rpx; }
    &__break {
      width: 100%;
      height: 20rpx;
    }
    &__info {
      box-sizing: border-box;
      width: 100%;
      padding: 40rpx 60rpx;
      background: white;
      position: relative;
      &:active {
        background: #fafafa;
      }
      &--name {
        font-size: 40rpx;
        line-height: 1;
      }
      &--id {
        color: @font2;
        font-size: 30rpx;
        margin-top: 26rpx;
        line-height: 1;
      }
      &::after {
        content: ">";
        color: @border;
        position: absolute;
        width: 30rpx;
        height: 30rpx;
        display: block;
        line-height: 1;
        top: 50%;
        right: 40rpx;
        transform: translateY(-70%);
      }
    }
  }
  .me-item {
    padding: 40rpx 60rpx;
    background: white;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    &:active {
      background: #fafafa;
    }
    p { letter-spacing: 1rpx; }
    &__title {
      font-size: 34rpx;
      line-height: 1;
    }
    &::after {
      content: ">";
      color: @border;
      position: absolute;
      display: block;
      width: 30rpx;
      height: 30rpx;
      line-height: 1;
      top: 50%;
      right: 40rpx;
      transform: translateY(-70%);
    }
  }
</style>

