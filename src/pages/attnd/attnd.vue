<template>
  <div class="attnd">
    <div class="attnd__header">
      <attnd-header :data="headerData" :height="headerHeight"/>
    </div>
    <div class="attnd__content"
      :style="{paddingTop: headerHeight + 'rpx', paddingBottom: btnHeight + 'rpx'}">
      <attnd-content :data="contentData" :loading="listLoading" @load-more="onLoadMore"/>
    </div>
    <div class="attnd__signin">
      <attnd-signin :btn-height="btnHeight"/>
    </div>
  </div>
</template>

<script>
  import AttndHeader from '../../components/attnd/attnd-header';
  import AttndContent from '../../components/attnd/attnd-content';
  import AttndSignin from '../../components/attnd/attnd-signin';

  export default {
    data() {
      return {
        headerHeight: 220, // rpx
        btnHeight: 90, // rpx
        headerData: {},
        contentData: [],
        listLoading: false
      }
    },
    components: {
      'attnd-header': AttndHeader,
      'attnd-content': AttndContent,
      'attnd-signin': AttndSignin
    },
    created() {
      this.contentData = [
        { logo: 1, name: 'plx', distance: 200 },
        { logo: 1, name: 'plx', distance: 200 },
        { logo: 1, name: 'plx', distance: 200 },
        { logo: 1, name: 'plx', distance: 200 },
        { logo: 1, name: 'plx', distance: 200 },
        { logo: 1, name: 'plx', distance: 200 },
        { logo: 1, name: 'plx', distance: 200 },
        { logo: 1, name: 'plx', distance: 200 },
        { logo: 1, name: 'plx', distance: 200 },
        { logo: 1, name: 'plx', distance: 200 },
        { logo: 1, name: 'plx', distance: 200 },
        { logo: 1, name: 'plx', distance: 200 },
        { logo: 1, name: 'plx', distance: 200 },

      ]
    },
    onLoad() {
      
    },
    methods: {
      onLoadMore() {
        if (this.listLoading) return;
        this.listLoading = true;
        setTimeout(() => {
          this.contentData = this.contentData.concat([
            { logo: 1, name: 'plx', distance: 200 },
            { logo: 2, name: 'plx', distance: 200 },
            { logo: 3, name: 'plx', distance: 200 },
            { logo: 4, name: 'plx', distance: 200 },
          ]);
          this.listLoading = false;
        }, 500);
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/style/_variables.less";

  .attnd {
    position: relative;
    &__header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 100;
      background: white;
    }
    &__signin {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      z-index: 100;
    }
  }
</style>
