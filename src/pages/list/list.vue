<template>
  <div class="list">
    <ov-header 
      :header-height="headerHeight"
      @header-tab="onTabToggle"
      @header-refresh="onRefreshClick">
    </ov-header>
    <ov-listview
      :scroll-height="scrollHeight"
      :list-data="getListData"
      :list-loading="listLoading"
      @scroll-bottom="onScrollBottom">
    </ov-listview>
  </div>
</template>

<script>
  import OvHeader from '@/components/list/list-header';
  import OvListview from '@/components/list/list-listview';

  // 紧紧当 onShow 和点击刷新按钮时获取最新数据
  // 上拉触底时追加新数据
  export default {
    data() {
      return {
        headerHeight: 100,  // rpx
        tabIndex: 0,
        scrollHeight: 0,
        listData: {
          attnd: [
            { name: '未命名1', date: '2018-09-10 21:30', author: '纸纸纸盆' },
            { name: '未命名2', date: '2018-09-10 21:30', author: '纸纸纸盆' },
            { name: '未命名3', date: '2018-09-10 21:30', author: '纸纸纸盆' },
            { name: '未命名4', date: '2018-09-10 21:30', author: '纸纸纸盆' },
            { name: '未命名5', date: '2018-09-10 21:30', author: '纸纸纸盆' },
            { name: '未命名6', date: '2018-09-10 21:30', author: '纸纸纸盆' },
            { name: '未命名7', date: '2018-09-10 21:30', author: '纸纸纸盆' },
            { name: '未命名8', date: '2018-09-10 21:30', author: '纸纸纸盆' },
            { name: '未命名9', date: '2018-09-10 21:30', author: '纸纸纸盆' }
          ],
          signin: [
            { name: '未命名5', date: '2018-09-10 21:30', author: '纸纸纸盆' },
            { name: '未命名6', date: '2018-09-10 21:30', author: '纸纸纸盆' },
            { name: '未命名7', date: '2018-09-10 21:30', author: '纸纸纸盆' },
            { name: '未命名8', date: '2018-09-10 21:30', author: '纸纸纸盆' },
            { name: '未命名9', date: '2018-09-10 21:30', author: '纸纸纸盆' }
          ]
        },
        loading: false,
        listLoading: false
      }
    },
    components: {
      'ov-listview': OvListview,
      'ov-header': OvHeader
    },
    methods: {
      // 计算 ScrollView 的高度
      getScrollViewHeight() {
        try {
          const { windowWidth, windowHeight } = wx.getSystemInfoSync();
          const headerHeight = this.headerHeight * (windowWidth / 750);
          return windowHeight - headerHeight - 1;
        } catch (e) {}
        return 750;
      },
      onTabToggle(tabIndex) {
        this.tabIndex = tabIndex;
      },
      onRefreshClick() {

      },
      onScrollBottom() {
        if (this.listLoading) return;
        this.listLoading = true;
        if (this.tabIndex === 0) {
          setTimeout(() => {
            this.listData.attnd = this.listData.attnd.concat([
              { name: '未命名1', date: '2018-09-10 21:30', author: '纸纸纸盆' },
              { name: '未命名2', date: '2018-09-10 21:30', author: '纸纸纸盆' },
              { name: '未命名3', date: '2018-09-10 21:30', author: '纸纸纸盆' },
              { name: '未命名4', date: '2018-09-10 21:30', author: '纸纸纸盆' },
              { name: '未命名5', date: '2018-09-10 21:30', author: '纸纸纸盆' },
            ])
            this.listLoading = false;
          }, 2000);
        }
      }
    },
    computed: {
      getListData() {
        if (this.tabIndex === 0) return this.listData.attnd;
        if (this.tabIndex === 1) return this.listData.signin;
      }
    },
    created() {
      this.scrollHeight = this.getScrollViewHeight();
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


