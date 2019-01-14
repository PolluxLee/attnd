<template>
  <div class="hint">
    <slot>
      <p :style="{visibility: show? 'visible': 'hidden'}">正在加载...</p>
    </slot>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="less">
  @import "../assets/style/_variables.less";
  
  .hint {
    height: 90rpx;
    width: 100%;
    p {
      font-size: 28rpx;
      color: @font2;
      line-height: 90rpx;
      text-align: center;
    }
  }
</style>

