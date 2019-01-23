<template>
  <div class="me-item" @click="onItemClick">
    <div class="me-item__info" v-if="item.type === 'info'">
      <p>{{item.titles[0]}}</p>
      <p>{{item.titles[1]}}</p>
    </div>
    <div class="me-item__option" v-if="item.type === 'option'">
      <p>{{item.titles[0]}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: {
      item: {
        type: Object,
        required: false,
        default() {
          return {
            type: 'option',
            titles: ['option']
          }
        }
      }
    },
    methods: {
      onItemClick() {
        this.$emit('item-click');
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/style/_variables.less";
  
  .me-item {
    padding: 40rpx 60rpx;
    background: white;
    width: 100%;
    position: relative;
    line-height: 1;
    &:active {
      background: #fafafa;
    }
    &__info {
      p:first-child {
        font-size: 40rpx;
      }
      p:last-child {
        color: @font2;
        font-size: 30rpx;
        margin-top: 26rpx;
      }
    }
    &__option {
      font-size: 34rpx;
    }
    &::after {
      content: ">";
      color: @border;
      position: absolute;
      display: block;
      width: 30rpx;
      height: 30rpx;
      top: 50%;
      right: 40rpx;
      transform: translateY(-70%);
    }
  }
</style>
