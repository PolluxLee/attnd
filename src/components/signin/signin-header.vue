<template>
  <div class="signin-header" :style="{height: height + 'rpx'}">
    <div class="signin-header__content">
      <p class="signin-header__t1">{{data.attndName}}</p>
      <p class="signin-header__t2">时间：{{data.time}}</p>
      <p class="signin-header__t2">发布者：{{data.authorName}}</p>
      <p class="signin-header__t2">口令：{{data.passwd}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      height: {
        type: Number,
        required: true,
        default: 250 // rpx
      },
      data: {
        type: Object,
        required: true,
        default: () => {
          return { attndName: '', time: '', authorName: '', passwd: '' }
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/style/_variables.less";

  .signin-header {
    padding: 0 60rpx;
    display: flex;
    align-items: center;
    &__t1 {
      font-size: 42rpx;
      line-height: 1;
      margin-bottom: 30rpx;
    }
    &__t2 {
      font-size: 28rpx;
      color: @font2;
      line-height: 1;
      margin-top: 10rpx;
    }
  }
</style>

