<template>
  <div class="me">
    <me-item 
      :item="{ type: 'info', titles: [name, stuId] }"
      @item-click="onItemClick(PageTypes.USER_INFO)" />

    <div style="margin-top: 20rpx">
      <!-- 授权管理 -->
      <me-item
        :item="{ type: 'option', titles: ['授权管理'] }"
        @item-click="onItemClick(PageTypes.AUTH)" />
    </div>

    <!-- 关于我们 -->
    <div style="margin-top: 20rpx">
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
        stuId: '',
        loading: false
      }
    },
    components: {
      'me-item': MeItem
    },
    methods: {
      onItemClick(type) {
        wx.navigateTo({ url: `../form/${type}/main`});
      },
      async getUserInfo() {
        if (this.loading) {
          return;
        }
        this.loading = true;
        wx.showNavigationBarLoading();

        let result = await getUserInfoService();
        wx.hideNavigationBarLoading();

        if (result.code === 2000) {
          let { name, stuId } = result.data.payload;
          this.name = name;
          this.stuId = stuId;
        }

        this.loading = false;
      }
    },
    onShow() {
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

