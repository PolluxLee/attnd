<template>
  <div class="sign">
    <div class="sign__wrapper">
      <div class="sign__title">
        <p class="sign__title--1">输入口令</p>
        <p class="sign__title--2">* 请向考勤发起者索取考勤口令</p>
      </div>
      <div class="sign__input">
        <input type="text" placeholder-style="color:#bababa" focus="true">
      </div>
      <div class="sign__release">
        <p>确认</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "../../../assets/style/_variables.less";
.sign {
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
