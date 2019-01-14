<template>
  <div class="ovheader">
    <div class="ovheader__nav" :style="{height: headerHeight + 'rpx'}">
      <div class="ovheader__tab">
        <p class="ovheader__tab--1" @click="onTabClick(0)" :style="tab1Toggle">考勤</p>
        <p class="ovheader__tab--2" @click="onTabClick(1)" :style="tab2Toggle">签到</p>
      </div>
      <div class="ovheader__refresh">
        <img src="../assets/icon/refresh.png">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabIndex: 0
      }
    },
    props: {
      headerHeight: {
        type: Number,
        required: true,
        default: () => {
          return 100;
        }
      }
    },
    methods: {
      onTabClick(index) {
        this.tabIndex = index;
        this.$emit('header-tab', index);
      },
      onRefreshClick() {
        // TODO: 防抖
        this.$emit('header-refresh');
      }
    },
    computed: {
      tab1Toggle() {
        if (this.tabIndex === 0) {
          return `border-bottom: 8rpx solid #3ABB69;color: black`;
        }
        return `border-bottom: 8rpx solid #ffffff;color: #838383`;
      },
      tab2Toggle() {
        if (this.tabIndex === 1) {
          return `border-bottom: 8rpx solid #3ABB69;color: black`;
        }
        return `border-bottom: 8rpx solid #ffffff;color: #838383`;
      }
    },
  }
</script>


<style lang="less">
  @import "../assets/style/_variables.less";
  .ovheader {
    box-sizing: border-box;
    p { letter-spacing: 1rpx; }
    &__nav {
      width: 100%;
      background: white;
      box-sizing: border-box;
      padding: 10rpx 60rpx 20rpx 60rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
      &:active {
        background: @greyActive;
      }
      img {
        width: 32rpx;
        height: 32rpx;
      }
    }
    &__wrapper {
      background-color: @bg;
      margin-top: 100rpx;
    }
  }
</style>

