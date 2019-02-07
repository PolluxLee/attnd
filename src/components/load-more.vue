<template>
  <div class="load-more">
    <p>{{active ? title : '无更多'}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      active: {
        type: Boolean,
        default: true
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
  
  .load-more {
    height: 90rpx;
    width: 100%;
    p {
      font-size: 28rpx;
      line-height: 90rpx;
      text-align: center;
      color: @font2;
    }
  }
</style>

