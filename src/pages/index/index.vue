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
        <div class="index__sign" @click="onOperClick(PageTypes.PASS_WD)">
          <p>输入口令签到</p>
        </div>
      </div>
    </div>
    <tips :show="showTips"/>
  </div>
</template>

<script>
  import { PageTypes } from '../../utils/consts';
  import Tips from '../../components/tips';

  export default {
    data() {
      return {
        PageTypes,
        showTips: false
      };
    },
    components: {
      tips: Tips
    },
    methods: {
      onOperClick(pageType) {
        wx.navigateTo({ url: `../form/main?type=${pageType}` });
      },
      onAttnd() {
        this.showTips = true;
        setTimeout(() => {
          this.showTips = false;
        }, 2000);
      }
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
