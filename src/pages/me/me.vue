<template>
  <div class="me">
    <div class="me__info">
      <p class="me__info--name">纸纸纸盆</p>
      <p class="me__info--id">1506100006</p>
    </div>
    <div class="me__break"></div>
    <item>
      <template slot="title">电子邮箱</template>
    </item>
    <div class="me__break"></div>
    <item>
      <template slot="title">授权管理</template>
    </item>
    <item>
      <template slot="title">关于我们</template>
    </item>
    <item>
      <template slot="title">推荐给朋友</template>
    </item>
  </div>
</template>

<script>
  import item from '@/components/me-item'
  export default {
    data() {
      return {

      }
    },
    components: {
      item
    }
  }
</script>

<style lang="less">
  @import "../../assets/style/_variables.less";
  page {
    width: 100%;
    height: 100%;
    background-color: @bg;
  }
  .me {
    p { letter-spacing: 1rpx; }
    &__break {
      width: 100%;
      height: 20rpx;
    }
    &__info {
      box-sizing: border-box;
      width: 100%;
      padding: 40rpx 60rpx;
      background: white;
      position: relative;
      &:active {
        background: #fafafa;
      }
      &--name {
        font-size: 40rpx;
        line-height: 1;
      }
      &--id {
        color: @font2;
        font-size: 30rpx;
        margin-top: 26rpx;
        line-height: 1;
      }
      &::after {
        content: ">";
        color: @border;
        position: absolute;
        width: 30rpx;
        height: 30rpx;
        display: block;
        line-height: 1;
        top: 50%;
        right: 40rpx;
        transform: translateY(-70%);
      }
    }
  }
</style>

