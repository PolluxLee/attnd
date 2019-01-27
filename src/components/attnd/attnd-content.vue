<template>
  <div class="attnd-content">
    <div class="attnd-item" v-for="(item, index) in data" :item="item">
      <div class="attnd-item__avatar">
        <p>{{item.logo}}</p>
      </div>
      <div class="attnd-item__t">
        <p class="attnd-item__t--1">{{item.name}}</p>
        <p class="attnd-item__t--2">距离：{{item.distance}} m</p>
      </div>
      <div class="attnd-item__status"></div>
    </div>
    <load-more :show="loading"/>
  </div>
</template>

<script>
  import LoadMore from '@/components/loadMore';
  import { atLog } from '@/utils/atLog';

  export default {
    props: {
      data: {
        type: Array,
        required: true,
        default: () => {
          return [];
        }
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    components: {
      'load-more': LoadMore
    },
    onReachBottom() {
      this.$emit('load-more');
    }
  }
</script>

<style lang="less">
  @import "../../assets/style/_variables.less";

  .attnd-content {
    padding: 0 60rpx;
    overflow: auto;
    .attnd-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10rpx 0;
      &__avatar {
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
        width: 350rpx;
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          line-height: 1;
        }
        &--1 { font-size: 32rpx; }
        &--2 {
          font-size: 26rpx;
          margin-top: 20rpx;
          color: @font2;
        }
      }
      &__status {
        width: 100rpx;
        height: 100rpx;
        background: #fafafa;
      }
    }
  }
</style>

