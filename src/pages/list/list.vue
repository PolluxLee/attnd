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
        :loading-active="attnd.hasMore"
        @load-more="onLoadMore" />
      <list-content
        v-if="tabIndex===1"
        :data="signin.list"
        :loading-active="signin.hasMore"
        @load-more="onLoadMore" />
    </div>
    <!-- <at-loading :loading="loading"/> -->
  </div>
</template>

<script>
  import ListHeader from '@/components/list/list-header';
  import ListContent from '@/components/list/list-content';
  import { atLog } from '@/utils/at-log';
  import { throttle } from '@/utils/throttle';
  import { debounce } from '@/utils/debounce';
  import AtLoading from '@/components/at-loading';
  import { getAttndsService } from '@/services/attnd.service';

  // 仅仅当 onShow 和点击刷新按钮时获取最新数据
  // 上拉触底时追加新数据
  export default {
    data() {
      return {
        headerHeight: 100,  // rpx
        tabIndex: 0,
        loading: false,
        attnd: {
          offsetId: null,
          hasMore: true,
          pageLoading: false,
          list: []
        },
        signin: {
          offsetId: null,
          pageLoading: false,
          hasMore: true,
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
      this.resetList();
    }, 8000),

    methods: {
      onTabToggle(tabIndex) {
        this.tabIndex = tabIndex;
        wx.pageScrollTo({ scrollTop: 0, duration: 0 });
      },

      onRefreshClick: debounce(async function() {
        this.resetList();
      }, 500, true),

      async resetList() {
        if (this.loading) return;
        this.loading = true;
        wx.showNavigationBarLoading();

        await this.getAttndList(0);

        this.loading = false;
        wx.hideNavigationBarLoading();
        wx.pageScrollTo({ scrollTop: 0, duration: 0 });
      },

      async onLoadMore() {
        if (this.tabIndex === 0) {
          let wrapper = this.attnd;
          if (wrapper.pageLoading || this.loading || !wrapper.hasMore) return;

          wrapper.pageLoading = true;
          await this.getAttndList(wrapper.list.length);
          wrapper.pageLoading = false;
        } else {

        }
      },

      async getAttndList(offset) {
        let wrapper = this.attnd;

        if (!Number.isInteger(offset) || offset < 0) return;

        // 请求第 1 页时激活 loadMore 节点
        if (offset === 0) wrapper.hasMore = true;

        let result = await getAttndsService({
          offset,
          offsetId: wrapper.offsetId
        });

        // offset === 0 时更新偏移基准 offsetId
        let { offsetId } = result.data
        if (offset === 0 && offsetId) {
          wrapper.offsetId = offsetId;
        }

        let { payload } = result.data;
        wrapper.list = offset === 0 ? payload : wrapper.list.concat(payload);

        let { hasMore } = result.data;
        wrapper.hasMore = hasMore;
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


