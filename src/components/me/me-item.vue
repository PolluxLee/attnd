<template>
  <div class="me-item" @click="onItemClick">
    <button class="me-item__info"
      v-if="item.type === 'info'"
      hover-class="none">
      <p>{{item.titles[0]}}</p>
      <p v-if="item.titles[1]">{{item.titles[1]}}</p>
    </button>
    <button class="me-item__option"
      v-if="item.type === 'option'"
      :open-type="item.openType"
      hover-class="none">
      <p>{{item.titles[0]}}</p>
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: false,
        default() {
          return {
            type: 'option',
            titles: ['...'],
            openType: ''
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
  
  button {
    background: none;
    line-height: normal;
    padding: 0;
    text-align: left;
    letter-spacing: 1rpx;
    &::after {
      border: none;
    }
  }

  .me-item {
    padding: 30rpx 50rpx;
    background: white;
    width: 100%;
    position: relative;
    line-height: 1;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &:active {
      background: @hover;
    }
    &__info {
      p:nth-child(1) {
        font-size: 40rpx;
      }
      p:nth-child(2) {
        color: @font2;
        font-size: 30rpx;
        margin-top: 20rpx;
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
