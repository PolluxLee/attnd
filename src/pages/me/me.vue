<template>
  <div class="me">
    <me-item 
      :item="{ type: 'info', titles: ['纸纸纸盆', '1506100006'] }"
      @item-click="onItemClick(PageTypes.SELF)" />

    <div style="margin-top: 20rpx">
      <!-- 电子邮箱 -->
      <me-item
        :item="{ type: 'option', titles: ['电子邮箱'] }"
        @item-click="onItemClick(PageTypes.EMAIL)" />
    </div>

    <div style="margin-top: 20rpx">
      <!-- 授权管理 -->
      <me-item
        :item="{ type: 'option', titles: ['授权管理'] }"
        @item-click="onItemClick(PageTypes.AUTH)" />

      <!-- 关于我们 -->
      <me-item
        :item="{ type: 'option', titles: ['关于我们'] }"
        @item-click="onItemClick(PageTypes.ABOUT)" />
    </div>
  </div>
</template>

<script>
  import { PageTypes } from "../../utils/consts";
  import MeItem from "@/components/me/me-item";

  export default {
    data() {
      return {
        PageTypes
      }
    },
    components: {
      'me-item': MeItem
    },
    methods: {
      onItemClick(type) {
        wx.navigateTo({ url: `../form/main?type=${type}`});
      }
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
</style>

