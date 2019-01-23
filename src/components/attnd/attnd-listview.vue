<template>
  <scroll-view class="at-listview"
    scroll-y
    :style="{height: scrollHeight + 'px'}"
    lower-threshold="150rpx"
    @scrolltolower="onScrollBottom">
    <div class="atitem">
      <div class="atitem__avatar">
        <p>纸</p>
      </div>
      <div class="atitem__t">
        <p class="atitem__t--1">纸纸纸盆纸纸纸盆纸纸纸盆纸纸纸盆纸纸纸盆纸纸纸盆</p>
        <p class="atitem__t--2">距离：200m距离：200m距离：200m距离：200m距离：200m距离：200m</p>
      </div>
      <div class="atitem__status">

      </div>
    </div>
    <hint :show="listLoading"/>
  </scroll-view>
</template>

<script>
  import Hint from './hint';

  export default {
    data() {
      return {

      }
    },
    props: {
      listLoading: {
        type: Boolean,
        default: false
      },
      scrollHeight: {
        type: Number,
        required: true,
        default: 700
      },
      
    }
    
  }
</script>

<style lang="less">
  @import "../assets/style/_variables.less";

  .atlistview {
    box-sizing: border-box;
    padding: 0 60rpx;
  }

  .atitem {
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
  
</style>

