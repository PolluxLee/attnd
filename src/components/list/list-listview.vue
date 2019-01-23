<template>
  <scroll-view 
    scroll-y
    :style="{height: scrollHeight + 'px'}"
    lower-threshold="150rpx"
    @scrolltolower="onScrollBottom">
    <div class="ovitem"
      v-for="(item, index) in listData" :item="item" :key="index">
      <p class="ovitem__t1">{{item.name}}</p>
      <p class="ovitem__t2">时间：{{item.date}}</p>
      <p class="ovitem__t2">发布者：{{item.author}}</p>
    </div>
    <hint :show="listLoading"/>
  </scroll-view>
</template>

<script>
  import Hint from '../hint';

  export default {
    data() {
      return {
      }
    },
    props: {
      scrollHeight: {
        type: Number,
        required: true,
        default: 700
      },
      listData: {
        type: Array,
        required: true,
        default: () => {
          return []
        }
      },
      listLoading: {
        type: Boolean,
        default: false
      }
    },
    components: {
      hint: Hint
    },
    methods: {
      onScrollBottom() {
        console.log('scroll to bottom');
        this.$emit('scroll-bottom');
      }
    },
    created() {
      
    }
  }
</script>

<style lang="less">
  @import "../../assets/style/_variables.less";

  .ovitem {
    p { letter-spacing: 1rpx; }
    &:active {
      background: @greyActive;
    }
    background: white;
    padding: 30rpx 60rpx;
    box-sizing: border-box;
    margin-bottom: 10rpx;
    &__t1 {
      font-size: 36rpx;
      line-height: 1;
      margin-bottom: 30rpx;
    }
    &__t2 {
      font-size: 28rpx;
      line-height: 1;
      color: @font2;
      margin-top: 10rpx;
    }
  }
</style>
