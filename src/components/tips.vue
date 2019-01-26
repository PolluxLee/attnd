<template>
  <div class="tips" v-if="show">
    <div class="tips__content">
      <div class="tips__loading">
        <div></div><div></div><div></div><div></div>
      </div>
      <p class="tips__title">{{title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '请稍候...'
      }
    }
  }
</script>

<style lang="less">
  @import "../assets/style/_variables.less";

  .tips {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    &__content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 600;
      width: 400rpx;
      height: 140rpx;
      background: rgba(0, 0, 0, 0.6);
      padding: 0 30rpx;
      display: flex;
      align-items: center;
      border-radius: 8rpx;
    }
    &__loading {
      display: inline-block;
      position: relative;
      width: 80rpx;
      height: 80rpx;
      div {
        display: block;
        position: absolute;
        width: 80rpx;
        height: 80rpx;
        border: 6rpx solid @lightGrey;
        border-radius: 50%;
        animation: ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: @lightGrey transparent transparent transparent;
      }
      div:nth-child(1) {
        animation-delay: -0.45s;
      }
      div:nth-child(2) {
        animation-delay: -0.3s;
      }
      div:nth-child(3) {
        animation-delay: -0.15s;
      }
    }
    &__title {
      width: 250rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: @lightGrey;
      font-size: 36rpx;
      margin-left: 20rpx;
    }
  }

  @keyframes ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>


