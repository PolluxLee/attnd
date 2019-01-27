<template>
  <div class="list">
    <div class="list__header">
      <list-header
        :tab-index="tabIndex"
        :header-height="headerHeight" 
        @header-tab="onTabToggle" 
        @header-refresh="onRefreshClick" />
    </div>
    <div class="list__content" :style="{paddingTop: headerHeight + 'rpx'}">
      <list-content
        v-if="tabIndex===0"
        :data="attnd.list"
        :loading="attnd.loadingMore"
        @load-more="onLoadMore" />
      <list-content
        v-if="tabIndex===1"
        :data="signin.list"
        :loading="signin.loadingMore"
        @load-more="onLoadMore" />
    </div>
    <at-loading :show="loading"/>
  </div>
</template>

<script>
  import ListHeader from '@/components/list/list-header';
  import ListContent from '@/components/list/list-content';
  import { atLog } from '@/utils/atLog';
  import { getListData } from '@/services/list.service';
  import { throttle } from '@/utils/throttle';
  import AtLoading from '@/components/atLoading';

  // 仅仅当 onShow 和点击刷新按钮时获取最新数据
  // 上拉触底时追加新数据
  export default {
    data() {
      return {
        headerHeight: 100,  // rpx
        tabIndex: 0,
        loading: false,
        attnd: {
          page: 1,
          pageSize: 10,
          count: 100,
          loadingMore: false,
          list: []
        },
        signin: {
          page: 1,
          pageSize: 10,
          count: 100,
          loadingMore: false,
          list: []
        }
      }
    },
    components: {
      'list-header': ListHeader,
      'list-content': ListContent,
      'at-loading': AtLoading
    },
    onShow: throttle(async function() {
      if (this.loading) return;
      let a = getListData(0);
      let b = getListData(1);
      this.loading = true;
      
      this.attnd.list = await a;
      this.signin.list = await b;
      this.loading = false;
    }, 30000),
    methods: {
      onTabToggle(tabIndex) {
        this.tabIndex = tabIndex;
        wx.pageScrollTo({ scrollTop: 0, duration: 0 });
      },
      async onLoadMore() {
        let wrapper = null;
        if (this.tabIndex === 0) wrapper = this.attnd;
        if (this.tabIndex === 1) wrapper = this.signin;
        if (!wrapper) return;

        if (wrapper.loadingMore) return;
        wrapper.loadingMore = true;

        if (this.tabIndex === 0) {
          wrapper.list = wrapper.list.concat(await getListData(0));
          wrapper.loadingMore = false;
        }
        if (this.tabIndex === 1) {
          wrapper.list = wrapper.list.concat(await getListData(1));
          wrapper.loadingMore = false;
        }
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

  .list {
    position: relative;
    &__header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
    }
    &__content {
      position: relative;
    }
  }
</style>


