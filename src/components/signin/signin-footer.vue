<template>
  <div class="signin-footer">
    <div class="signin-footer__confirm" :style="{height: btnHeight + 'rpx'}">
      <p>签到</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      btnHeight: {
        type: Number,
        default: 90, // rpx
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/style/_variables.less";

  .signin-footer {
    &__confirm {
      background: @theme;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1;
      color: white;
      font-size: 36rpx;
    }
  }
</style>

