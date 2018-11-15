<template>
  <div class="list">
    <div class="list__nav">
      <div class="list__tab">
        <p class="list__tab--1" @click="onAttndTabClick" :style="tab1Toggle">考勤</p>
        <p class="list__tab--2" @click="onSignTabClick" :style="tab2Toggle">签到</p>
      </div>
      <div class="list__refresh">
        <img src="../../assets/icon/refresh.png">
      </div>
    </div>
    <div class="list__wrapper">
      <list-item></list-item>
      <list-item></list-item>
      <list-item></list-item>
      <list-item></list-item>
      <list-item></list-item>
      <list-item></list-item>
      <list-item></list-item>
      <list-item></list-item>
    </div>
    <div class="list__more">
      <p>加载更多</p>
    </div>
  </div>
</template>

<script>
  import listitem from '@/components/list-item'
  export default {
    data() {
      return {
        tabIndex: 0
      }
    },
    components: {
      "list-item": listitem
    },
    methods: {
      onAttndTabClick() {
        this.tabIndex = 0
      },
      onSignTabClick() {
        this.tabIndex = 1
      }
    },
    computed: {
      tab1Toggle() {
        if (this.tabIndex === 0) {
          return `border-bottom: 8rpx solid #3ABB69;color: black`
        }
        return `border-bottom: 8rpx solid #ffffff;color: #838383`
      },
      tab2Toggle() {
        if (this.tabIndex === 1) {
          return `border-bottom: 8rpx solid #3ABB69;color: black`
        }
        return `border-bottom: 8rpx solid #ffffff;color: #838383`
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/style/_variables.less";
  page {
    width: 100%;
    height: 100%;
    background-color: @bg;
  }
  .list {
    box-sizing: border-box;
    p { letter-spacing: 1rpx; }
    &__nav {
      width: 100%;
      height: 100rpx;
      background: white;
      box-sizing: border-box;
      padding: 10rpx 60rpx 20rpx 60rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      left: 0;
      top: 0;
    }
    &__tab {
      font-size: 32rpx;
      display: flex;
      &--1, &--2 {
        box-sizing: border-box;
        padding: 8rpx 0 8rpx 0;
        margin-right: 50rpx;
      }
    }
    &__refresh {
      width: 60rpx;
      height: 60rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 32rpx;
        height: 32rpx;
      }
    }
    &__wrapper {
      background-color: @bg;
      margin-top: 100rpx;
    }
    &__more {
      width: 200rpx;
      height: 56rpx;
      font-size: 30rpx;
      box-sizing: border-box;
      color: @border;
      border: 1rpx solid @border;
      border-radius: 28rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1;
      margin: 36rpx auto;
    }
  }
</style>


