<template>
  <div class="list-content" :style="{height: height + 'rpx'}">
    <div class="list-content__item"
      v-for="(item, index) in data" :item="item" :key="index">
      <p class="list-content__item--t1">{{item.name}}</p>
      <p class="list-content__item--t2">时间：{{item.date}}</p>
      <p class="list-content__item--t2">发布者：{{item.author}}</p>
    </div>
    <div class="list-content__loading">
      <hint :show="loading"/>
    </div>
  </div>
</template>

<script>
  import Hint from '../hint';
  import { atLog } from '../../utils/atLog';

  export default {
    data() {
      return {
        firstTime: true
      }
    },
    props: {
      height: {
        type: Number,
        required: true,
        default: 750
      },
      data: {
        type: Array,
        required: true,
        default: () => {
          return []
        }
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    components: {
      hint: Hint
    },
    onLoad() {
      let intersectionObserver = wx.createIntersectionObserver();
      intersectionObserver.relativeTo('.list-content').observe('.list-content__loading', (res) => {
        if (res.intersectionRatio > 0) {
          if (this.firstTime) {
            this.firstTime = false;
            return;
          }
          atLog.log(this, '相交');
          this.$emit('load-more');
        }
      });
    }
  }
</script>

<style lang="less">
  @import "../../assets/style/_variables.less";

  .list-content {
    overflow: auto;
    &__item {
      &:active { background: @greyActive; }
      background: white;
      padding: 30rpx 60rpx;
      margin-bottom: 10rpx;
      line-height: 1;
      &--t1 {
        font-size: 36rpx;
        margin-bottom: 30rpx;
      }
      &--t2 {
        font-size: 28rpx;
        color: @font2;
        margin-top: 10rpx;
      }
    }
  }
</style>
