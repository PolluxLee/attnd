<template>
  <div class="me">
    <me-item 
      :item="{ type: 'info', titles: [name, stuId] }"
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
  import { PageTypes } from '@/utils/consts';
  import MeItem from '@/components/me/me-item';
  import { getUserInfoService } from '@/services/info.service';

  export default {
    data() {
      return {
        PageTypes,
        name: '...',
        stuId: ''
      }
    },
    components: {
      'me-item': MeItem
    },
    methods: {
      onItemClick(type) {
        this.globalData.pageType = type;
        setTimeout(() => {
          wx.navigateTo({ url: `../form/main`});
        }, 0);
      },
      async getUserInfo() {
        wx.showNavigationBarLoading();

        let result = await getUserInfoService();
        wx.hideNavigationBarLoading();

        switch (result.code) {
          case 3001: return;
          case 2000: 
            let { name, stuId } = result.data.payload;
            this.name = name;
            this.stuId = stuId;
            return;
          default:
            this.showToast = true;
            this.toastText = '获取信息失败';
            setTimeout(() => {
              this.showToast = false;
            }, 1000);
            return;
        }
      }
    },
    onLoad() {
      this.getUserInfo();
    },
    onShow() {
      if (!this.globalData.isUserInfoUpdated) {
        return;
      }
      this.globalData.isUserInfoUpdated = false;
      this.getUserInfo();
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

