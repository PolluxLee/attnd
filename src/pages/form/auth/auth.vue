<template>
  <div class="form">
    <!-- 授权管理 -->
    <div class="form__wrapper">
      <div class="form__title">
        <p class="form__title--1">授权</p>
        <p class="form__title--2">* 小程序需要获取你的地理位置</p>
      </div>
      <div class="form__release" @click="onAuthConfirm">
        <p>进入授权页</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      onAuthConfirm() {
        wx.openSetting();
      }
    }
  }
</script>

<style lang="less">
  @import "../style.less";
</style>


