<template>
  <div class="index">
    <div class="index__wrapper">
      <div class="index__title">
        <p class="index__title--1">欢迎使用GPS考勤</p>
        <p class="index__title--2">你可以</p>
      </div>
      <div class="index__oper">
        <div class="index__attnd" @click="onAttnd">
          <p>发起考勤</p>
        </div>
        <div class="index__sign" @click="onSignin">
          <p>输入口令签到</p>
        </div>
      </div>
    </div>
    <at-loading :show="loading"/>
  </div>
</template>

<script>
  import { PageTypes } from '@/utils/consts';
  import AtLoading from '@/components/at-loading';

  export default {
    data() {
      return {
        PageTypes,
        loading: false
      };
    },
    components: {
      'at-loading': AtLoading
    },
    methods: {
      onAttnd() {
        wx.navigateTo({ url: `../form/${PageTypes.RELEASE}/main` });
      },
      onSignin() {
        // wx.navigateTo({ url: `../form/${PageTypes.PASS_WD}/main` });
        wx.navigateTo({ url: `../signin/main?passwd=M32n+u` });
      },
    }
  };
</script>

<style lang="less">
  @import "../../assets/style/_variables.less";

  .index {
    position: relative;
    &__wrapper {
      width: 100%;
      padding: 200rpx 100rpx 0 100rpx;
    }
    &__title {
      &--1 {
        font-size: 60rpx;
        color: @font;
      }
      &--2 {
        font-size: 30rpx;
        color: @font2;
        margin-top: 20rpx;
      }
    }
    &__oper {
      width: 100%;
      margin-top: 40rpx;
    }
    &__attnd,
    &__sign {
      width: 100%;
      height: 100rpx;
      font-size: 40rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50rpx;
    }
    &__attnd {
      background: @theme;
      color: white;
      &:active { background: @greenActive; }
    }
    &__sign {
      margin-top: 30rpx;
      border: 1rpx solid black;
      &:active { background: @greyActive; }
    }
  }
</style>
