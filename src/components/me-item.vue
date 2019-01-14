<template>
  <div class="me-item" @click="onItemClick">
    <div class="me-item__title">
        <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: {
      type: String,
      required: true,
      default: 'about'
    },
    methods: {
      onItemClick() {
        console.log('dianji ')
        this.$emit('item-click', this.type);
      }
    }
  }
</script>

<style lang="less">
  @import "../assets/style/_variables.less";
  .me-item {
    padding: 40rpx 60rpx;
    background: white;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    &:active {
      background: #fafafa;
    }
    p { letter-spacing: 1rpx; }
    &__title {
      font-size: 34rpx;
      line-height: 1;
    }
    &::after {
      content: ">";
      color: @border;
      position: absolute;
      display: block;
      width: 30rpx;
      height: 30rpx;
      line-height: 1;
      top: 50%;
      right: 40rpx;
      transform: translateY(-70%);
    }
  }
</style>
