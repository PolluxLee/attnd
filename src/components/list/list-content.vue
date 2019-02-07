<template>
  <div class="list-content">
    <div class="list-content__item"
      v-for="(item, index) in data" :item="item">
      <p class="list-content__item--t1">{{item.attndName}}</p>
      <p class="list-content__item--t2">时间：{{item.time}}</p>
      <p class="list-content__item--t2">发布者：{{item.authorName}}</p>
      <span class="list-content__item--hint"
        :style="{background: item.status===1 ? 'green' : ''}" />
    </div>
    <load-more :active="loadingActive"/>
  </div>
</template>

<script>
  import LoadMore from '@/components/load-more';
  import { atLog } from '@/utils/at-log';

  export default {
    props: {
      data: {
        type: Array,
        required: true,
        default: () => {
          return [];
        }
      },
      loadingActive: {
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
      &:active { background: @hover; }
      background: white;
      padding: 30rpx 60rpx;
      margin-bottom: 10rpx;
      line-height: 1;
      position: relative;
      &--hint {
        position: absolute;
        display: block;
        width: 12rpx;
        height: 12rpx;
        top: 30rpx;
        right: 30rpx;
        border-radius: 50%;
      }
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
