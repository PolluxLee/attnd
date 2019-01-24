<template>
  <div class="list">
    <list-header 
      :header-height="headerHeight"
      @header-tab="onTabToggle"
      @header-refresh="onRefreshClick">
    </list-header>
    <list-content
      :height="listHeight"
      :data="getListData"
      :loading="listLoading"
      @load-more="onLoadMore">
    </list-content>
  </div>
</template>

<script>
  import ListHeader from '@/components/list/list-header';
  import ListContent from '@/components/list/list-content';

  // 紧紧当 onShow 和点击刷新按钮时获取最新数据
  // 上拉触底时追加新数据
  export default {
    data() {
      return {
        headerHeight: 100,  // rpx
        tabIndex: 0,
        listHeight: 0,
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
      'list-header': ListHeader,
      'list-content': ListContent
    },
    methods: {
      // 计算 list-content 的高度
      getListContentHeight() {
        try {
          const { windowWidth, windowHeight } = wx.getSystemInfoSync();
          console.log('windowHeight', windowHeight);
          return windowHeight * (750 / windowWidth) - this.headerHeight - 1;
        } catch (e) {}
        return 750;
      },
      onTabToggle(tabIndex) {
        this.tabIndex = tabIndex;
      },
      onRefreshClick() {

      },
      onLoadMore() {
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
          }, 500);
        } else {
          setTimeout(() => {
            this.listData.signin = this.listData.signin.concat([
              { name: '未命名1', date: '2018-09-10 21:30', author: '纸纸纸盆' },
              { name: '未命名2', date: '2018-09-10 21:30', author: '纸纸纸盆' },
              { name: '未命名3', date: '2018-09-10 21:30', author: '纸纸纸盆' },
              { name: '未命名4', date: '2018-09-10 21:30', author: '纸纸纸盆' },
              { name: '未命名5', date: '2018-09-10 21:30', author: '纸纸纸盆' },
            ])
            this.listLoading = false;
          }, 500);
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
    },
    onLoad() {
      this.listHeight = this.getListContentHeight();
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


