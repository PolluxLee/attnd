<template>
  <div class="form">
    <!-- 输入口令 -->
    <div class="form__wrapper">
      <div class="form__title">
        <p class="form__title--1">输入口令</p>
        <p class="form__title--2">* 请向考勤发起者索取考勤口令</p>
      </div>
      <div class="form__input">
        <input type="text" placeholder="例如：计网-计科151" placeholder-style="color:#bababa" focus="true">
      </div>
      <div class="form__release">
        <p>确认</p>
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
      }
    },
    components: {
      'at-loading': AtLoading,
      'at-toast': AtToast
    },
  }
</script>

<style lang="less">
  @import "../style.less";
</style>


