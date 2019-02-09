<template>
  <div class="signin-header" :style="{height: height + 'rpx'}">
    <div class="signin-header__content">
      <div class="signin-header__title">
        <p class="signin-header__t1">{{data.attndName}}</p>
        <span class="signin-header__status">进行中</span>
      </div>
      <p class="signin-header__t2">时间：{{data.time}}</p>
      <p class="signin-header__t2">发布者：{{data.authorName}}</p>
      <p class="signin-header__t2">口令：{{data.passwd}}</p>
    </div>
    <div class="signin-header__refresh" @click="onRefreshClick">
      <img src="../../assets/icon/refresh.png">
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
    },
    methods: {
      onRefreshClick() {
        this.$emit('refresh');
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/style/_variables.less";

  .signin-header {
    padding: 0 100rpx 0 60rpx;
    display: flex;
    align-items: center;
    position: relative;
    &__title {
      display: flex;
      align-items: center;
      margin-bottom: 30rpx;
    }
    &__status {
      display: block;
      padding: 4rpx;
      border: 1rpx solid green;
      border-radius: 4rpx;
      line-height: 1;
      color: green;
      font-size: 18rpx;
      margin-left: 20rpx;
      flex: 0 0 auto;
    }
    &__refresh {
      position: absolute;
      top: 10rpx;
      right: 40rpx;
      width: 60rpx;
      height: 60rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      &:active { background: @hover; }
      img {
        width: 32rpx;
        height: 32rpx;
      }
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &__t1 {
      font-size: 42rpx;
      line-height: 1;
    }
    &__t2 {
      font-size: 28rpx;
      color: @font2;
      line-height: 1;
      margin-top: 10rpx;
    }
  }
</style>

