<template>
  <div class="attnd">
    <div class="attnd__header">
      <attnd-header :data="headerData" :height="headerHeight"/>
    </div>
    <div class="attnd__content">
      <attnd-content :data="contentData" :loading="loading" @load-more="onLoadMore"/>
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
        headerHeight: 250, // rpx
        btnHeight: 90, // rpx
        headerData: {},
        contentData: [],
        loading: false
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
        { logo: 2, name: 'plx', distance: 200 },
        { logo: 3, name: 'plx', distance: 200 },
        { logo: 4, name: 'plx', distance: 200 },
        { logo: 5, name: 'plx', distance: 200 },
        { logo: 6, name: 'plx', distance: 200 },
        { logo: 7, name: 'plx', distance: 200 },
        { logo: 8, name: 'plx', distance: 200 },
        { logo: 9, name: 'plx', distance: 200 },
        { logo: 0, name: 'plx', distance: 200 },
      ]
    },
    onLoad() {
      
    },
    methods: {
      onLoadMore() {
        setTimeout(() => {
          this.contentData = this.contentData.concat([
            { logo: 1, name: 'plx', distance: 200 },
            { logo: 2, name: 'plx', distance: 200 },
            { logo: 3, name: 'plx', distance: 200 },
            { logo: 4, name: 'plx', distance: 200 },
          ]);
        }, 500);
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/style/_variables.less";
</style>
