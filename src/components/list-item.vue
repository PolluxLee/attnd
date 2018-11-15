<template>
  <div class="list-item">
    <p class="list-item__t1">计算机网络</p>
    <p class="list-item__t2">日期：2018-12-21</p>
    <p class="list-item__t2">时间：14:26</p>
    <p class="list-item__t2">发布者：纸纸纸盆</p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
  @import "../assets/style/_variables.less";
  .list-item {
    p { letter-spacing: 1rpx; }
    background: white;
    padding: 30rpx 60rpx;
    box-sizing: border-box;
    margin-bottom: 10rpx;
    &__t1 {
      font-size: 36rpx;
      line-height: 1;
      margin-bottom: 30rpx;
    }
    &__t2 {
      font-size: 28rpx;
      line-height: 1;
      color: @font2;
      margin-top: 10rpx;
    }
  }
</style>
