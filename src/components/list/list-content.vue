<template>
  <div class="list-content">
    <div class="list-content__item"
      v-for="(item, index) in data" :item="item">
      <p class="list-content__item--t1">{{item.name}}</p>
      <p class="list-content__item--t2">时间：{{item.date}}</p>
      <p class="list-content__item--t2">发布者：{{item.author}}</p>
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
      atLog.log('list-content', '相交');
      this.$emit('load-more');
    }
  }
</script>

<style lang="less">
  @import "../../assets/style/_variables.less";

  .list-content {
    &__item {
      &:active { background: @greyActive; }
      background: white;
      padding: 30rpx 60rpx;
      margin-bottom: 10rpx;
      line-height: 1;
      &--t1 {
        font-size: 36rpx;
        margin-bottom: 30rpx;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      &--t2 {
        font-size: 28rpx;
        color: @font2;
        margin-top: 10rpx;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
</style>
