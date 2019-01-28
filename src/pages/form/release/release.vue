<template>
  <div class="form">
    <!-- 发起考勤 -->
    <div class="form__wrapper">
      <div class="form__title">
        <p class="form__title--1">输入考勤名称</p>
        <p class="form__title--2">* 考勤范围是以你为中心的方圆200米</p>
        <p class="form__title--2">* 发布考勤后会生成一个口令，请展示给参与此次签到的人</p>
      </div>
      <div class="form__input">
        <input type="text" placeholder="例如：计网-计科151" placeholder-style="color:#bababa" focus="true">
      </div>
      <div class="form__release">
        <p>立即发起</p>
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

        name: '',
        stuId: '',
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


