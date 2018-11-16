<template>
  <div class="attnd">
    <div class="attnd__info">
      <p class="attnd__info--t1">计算机网络</p>
      <p class="attnd__info--t2">日期：2018-12-21</p>
      <p class="attnd__info--t2">时间：14:26</p>
      <p class="attnd__info--t2">发布者：纸纸纸盆</p>
      <p class="attnd__info--t2">口令：E72efAp</p>
    </div>
    <div class="attnd__list">
      <div class="attnd-item">
        <div class="attnd-item__avatar">
          <p>纸</p>
        </div>
        <div class="attnd-item__t">
          <p class="attnd-item__t--1">纸纸纸盆纸纸纸盆纸纸纸盆纸纸纸盆纸纸纸盆纸纸纸盆</p>
          <p class="attnd-item__t--2">距离：200m距离：200m距离：200m距离：200m距离：200m距离：200m</p>
        </div>
        <div class="attnd-item__status">

        </div>
      </div>
      <div class="attnd-item">
        <div class="attnd-item__avatar">
          <p>纸</p>
        </div>
        <div class="attnd-item__t">
          <p class="attnd-item__t--1">纸纸纸盆</p>
          <p class="attnd-item__t--2">距离：200m</p>
        </div>
        <div class="attnd-item__status">

        </div>
      </div>
      <div class="attnd-item">
        <div class="attnd-item__avatar">
          <p>纸</p>
        </div>
        <div class="attnd-item__t">
          <p class="attnd-item__t--1">纸纸纸盆</p>
          <p class="attnd-item__t--2">距离：200m</p>
        </div>
        <div class="attnd-item__status">

        </div>
      </div>
      <div class="attnd-item">
        <div class="attnd-item__avatar">
          <p>纸</p>
        </div>
        <div class="attnd-item__t">
          <p class="attnd-item__t--1">纸纸纸盆</p>
          <p class="attnd-item__t--2">距离：200m</p>
        </div>
        <div class="attnd-item__status">

        </div>
      </div>
      <div class="attnd-item">
        <div class="attnd-item__avatar">
          <p>纸</p>
        </div>
        <div class="attnd-item__t">
          <p class="attnd-item__t--1">纸纸纸盆</p>
          <p class="attnd-item__t--2">距离：200m</p>
        </div>
        <div class="attnd-item__status">

        </div>
      </div>
      <div class="attnd-item">
        <div class="attnd-item__avatar">
          <p>纸</p>
        </div>
        <div class="attnd-item__t">
          <p class="attnd-item__t--1">纸纸纸盆</p>
          <p class="attnd-item__t--2">距离：200m</p>
        </div>
        <div class="attnd-item__status">

        </div>
      </div>
      <div class="attnd-item">
        <div class="attnd-item__avatar">
          <p>纸</p>
        </div>
        <div class="attnd-item__t">
          <p class="attnd-item__t--1">纸纸纸盆</p>
          <p class="attnd-item__t--2">距离：200m</p>
        </div>
        <div class="attnd-item__status">

        </div>
      </div>
      <div class="attnd-item">
        <div class="attnd-item__avatar">
          <p>纸</p>
        </div>
        <div class="attnd-item__t">
          <p class="attnd-item__t--1">纸纸纸盆</p>
          <p class="attnd-item__t--2">距离：200m</p>
        </div>
        <div class="attnd-item__status">

        </div>
      </div>
      <div class="attnd-item">
        <div class="attnd-item__avatar">
          <p>纸</p>
        </div>
        <div class="attnd-item__t">
          <p class="attnd-item__t--1">纸纸纸盆</p>
          <p class="attnd-item__t--2">距离：200m</p>
        </div>
        <div class="attnd-item__status">

        </div>
      </div>
      <div class="attnd-item">
        <div class="attnd-item__avatar">
          <p>纸</p>
        </div>
        <div class="attnd-item__t">
          <p class="attnd-item__t--1">纸纸纸盆</p>
          <p class="attnd-item__t--2">距离：200m</p>
        </div>
        <div class="attnd-item__status">

        </div>
      </div>
      <div class="attnd-item">
        <div class="attnd-item__avatar">
          <p>纸</p>
        </div>
        <div class="attnd-item__t">
          <p class="attnd-item__t--1">纸纸纸盆</p>
          <p class="attnd-item__t--2">距离：200m</p>
        </div>
        <div class="attnd-item__status">

        </div>
      </div>
    </div>
    <div class="attnd__confirm">
      <p>签到</p>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less">
  @import "../../assets/style/_variables.less";
  .attnd-item {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30rpx;
    &__avatar {
      box-sizing: border-box;
      width: 100rpx;
      height: 100rpx;
      border: 1rpx solid black;
      border-radius: 60rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1;
      font-size: 36rpx;
    }
    &__t {
      box-sizing: border-box;
      width: 350rpx;
      &--1 {
        font-size: 32rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &--2 {
        font-size: 26rpx;
        line-height: 1;
        margin-top: 20rpx;
        color: @font2;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    &__status {
      width: 100rpx;
      height: 100rpx;
      background: #fafafa;
    }
  }
  .attnd {
    p { letter-spacing: 1rpx; }
    &__info {
      box-sizing: border-box;
      padding: 60rpx;
      &--t1 {
        font-size: 42rpx;
        line-height: 1;
        margin-bottom: 30rpx;
      }
      &--t2 {
        font-size: 28rpx;
        color: @font2;
        line-height: 1;
        margin-top: 10rpx;
      }
    }
    &__list {
      box-sizing: border-box;
      padding: 0 60rpx;
      margin-bottom: 150rpx;
    }
    &__confirm {
      box-sizing: border-box;
      position: fixed;
      background: @theme;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 90rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1;
      color: white;
      font-size: 36rpx;
    }
  }
</style>

