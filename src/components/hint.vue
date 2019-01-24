<template>
  <div class="hint">
    <p :style="{color: show? '#838383': transparent}">
      {{title}}
    </p>
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
        default: '正在加载...'
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

