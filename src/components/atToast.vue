<template>
  <div class="at-toast" v-if="show">
    <div class="at-toast__content">
      <p class="at-toast__title">{{title}}</p>
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
  @import '../assets/style/_variables.less';

  .at-toast {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    width: 100%;
    height: 100%;
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
    &__title {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: @lightGrey;
      font-size: 36rpx;
      margin-left: 20rpx;
    }
  }
</style>

