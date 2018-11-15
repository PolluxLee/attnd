<template>
  <div class="config">
    <div class="config__wrapper">
      <div class="config__title">
        <p class="config__title--1">输入考勤名称</p>
        <p class="config__title--2">* 考勤范围是以你为中心的方圆200米</p>
        <p class="config__title--2">* 发布考勤后会生成一个口令，请展示给参与此次签到的人</p>
      </div>
      <div class="config__input">
        <input type="text" placeholder="例如：计网-计科151" placeholder-style="color:#bababa" focus="true">
      </div>
      <div class="config__release">
        <p>立即发起</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "../../../assets/style/_variables.less";
.config {
  p {
    letter-spacing: 1rpx;
  }
  &__wrapper {
    width: 100%;
    padding: 100rpx 60rpx 0 60rpx;
    box-sizing: border-box;
  }
  &__title {
    &--1 {
      font-size: 60rpx;
    }
    &--2 {
      font-size: 30rpx;
      color: @font2;
      margin-top: 20rpx;
    }
  }
  &__input {
    padding: 0 0 15rpx 0;
    border-bottom: 1rpx solid @border;
    box-sizing: border-box;
    margin-top: 100rpx;
    width: 100%;
    input {
      width: 100%;
      height: 60rpx;
      font-size: 40rpx;
    }
  }
  &__release {
    box-sizing: border-box;
    margin-top: 40rpx;
    width: 100%;
    height: 100rpx;
    font-size: 40rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50rpx;
    background: @theme;
    color: white;
    &:active {
      background: @greenActive;
    }
  }
}
</style>
