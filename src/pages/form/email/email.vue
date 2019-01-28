<template>
  <div class="form">
    <!-- 电子邮箱 -->
    <div class="form__wrapper">
      <div class="form__title">
        <p class="form__title--1">电子邮箱</p>
        <p class="form__title--2">* 电子邮箱用于导出考勤 Excel 表格</p>
      </div>
      <div class="form__input">
        <input type="text" placeholder="Email" placeholder-style="color:#bababa" focus="true">
      </div>
      <div class="form__release">
        <p>保存</p>
      </div>
    </div>
    <at-loading :show="showLoading" :title="loadingText"/>
    <at-toast :show="showToast" :title="toastText"/>
  </div>
</template>

<script>
  import { PageTypes } from '@/utils/consts';
  import AtLoading from '@/components/atLoading';
  import AtToast from '@/components/atToast';
  import { atLog } from '@/utils/atLog';
  import { getUserInfoService, updateUserInfoService } from '@/services/info.service';
  
  export default {
    data() {
      return {
        showLoading: false,
        loadingText: '请稍后...',
        showToast: false,
        toastText: '',

        email: ''
      }
    },
    components: {
      'at-loading': AtLoading,
      'at-toast': AtToast
    },
    methods: {
    },
    onLoad() {
      // this.initData();
    }
  }
</script>

<style lang="less">
  @import "../style.less";
</style>


