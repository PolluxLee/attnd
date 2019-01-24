<template>
  <div class="attnd-header" :style="{height: height + 'rpx'}">
    <div class="attnd-header__content">
      <p class="attnd-header__t1">计算机网络</p>
      <p class="attnd-header__t2">时间：2018-12-21 14:26</p>
      <p class="attnd-header__t2">发布者：纸纸纸盆</p>
      <p class="attnd-header__t2">口令：E72efAp</p>
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
          return { name: '', time: '', author: '', passwd: '' }
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/style/_variables.less";

  .attnd-header {
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

