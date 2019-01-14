<template>
  <div class="me">

    <div class="me__info" @click="onItemClick('self')">
      <p class="me__info--name">纸纸纸盆</p>
      <p class="me__info--id">1506100006</p>
    </div>

    <div class="me__break"></div>

    <!-- 电子邮箱 -->
    <me-item type="email" @item-click="onItemClick">
      <p>电子邮箱</p>
    </me-item>

    <div class="me__break"></div>

    <!-- 授权管理 -->
    <me-item type="auth" @item-click="onItemClick">
      <p>授权管理</p>
    </me-item>

    <!-- 关于我们 -->
    <me-item type="about" @item-click="onItemClick">
      <p>关于我们</p>
    </me-item>

  </div>
</template>

<script>
  import { PageTypes } from "../../utils/consts.js"
  import MeItem from "@/components/me-item";

  export default {
    data() {
      return {

      }
    },
    components: {
      'me-item': MeItem
    },
    methods: {
      onItemClick(type) {
        switch (type) {
          case 'self': 
            wx.navigateTo({ url: `../form/main?type=${PageTypes.SELF}`})
            break
          case 'email':
            wx.navigateTo({ url: `../form/main?type=${PageTypes.EMAIL}`})
            break
          case 'auth':
            wx.navigateTo({ url: `../form/main?type=${PageTypes.AUTH}`})
            break
          case 'about':
          default:
            break
        }
      }
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
</style>

