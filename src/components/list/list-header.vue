<template>
  <div class="list-header">
    <div class="list-header__nav" :style="{height: headerHeight + 'rpx'}">
      <div class="list-header__tab">
        <p class="list-header__tab--1" @click="onTabClick(0)" :style="tab1Toggle">考勤</p>
        <p class="list-header__tab--2" @click="onTabClick(1)" :style="tab2Toggle">签到</p>
      </div>
      <div class="list-header__refresh">
        <img src="../../assets/icon/refresh.png">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tabIndex: {
        type: Number,
        default: 0,
        validator: function (value) {
          return [0, 1].indexOf(value) !== -1
        }
      },
      headerHeight: {
        type: Number,
        required: true,
        default: 100 // rpx
      }
    },
    methods: {
      onTabClick(index) {
        if (index !== this.tabIndex) {
          this.$emit('header-tab', index);
        }
      },
      onRefreshClick() {
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
    }
  }
</script>


<style lang="less">
  @import "../../assets/style/_variables.less";

  .list-header {
    &__nav {
      width: 100%;
      background: white;
      padding: 10rpx 60rpx 20rpx 60rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__tab {
      font-size: 32rpx;
      display: flex;
      &--1, &--2 {
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
      &:active { background: @greyActive; }
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

