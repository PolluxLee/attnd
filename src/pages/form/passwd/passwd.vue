<template>
  <div class="form">
    <!-- 输入口令 -->
    <div class="form__wrapper">
      <div class="form__title">
        <p class="form__title--1">输入口令</p>
        <p class="form__title--2">* 请向考勤发起者索取考勤口令</p>
      </div>
      <div class="form__input">
        <input type="text"
          focus="true"
          v-model="passwd">
      </div>
      <div class="form__release" @click="onPasswdConfirm">
        <p>确认</p>
      </div>
    </div>
    <at-loading :show="showLoading" :title="loadingText"/>
    <at-toast :show="showToast" :title="toastText"/>
  </div>
</template>

<script>
  import { PageTypes } from '@/utils/consts';
  import AtLoading from '@/components/at-loading';
  import AtToast from '@/components/at-toast';
  import { atLog } from '@/utils/at-log';
  import { getAttndService } from '@/services/attnd.service';

  export default {
    data() {
      return {
        showLoading: false,
        loadingText: '请稍后...',
        showToast: false,
        toastText: '',

        passwd: ''
      }
    },

    components: {
      'at-loading': AtLoading,
      'at-toast': AtToast
    },

    methods: {
      async onPasswdConfirm() {
        try {
          if (!this.passwd) {
            this.showToast = true;
            this.toastText = '名称不能为空';
            setTimeout(() => {
              this.showToast = false;
            }, 1000);
            return;
          }

          if (this.showLoading) return;
          this.showLoading = true;

          let result = await getAttndService({ passwd: this.passwd });
          this.showLoading = false;

          if (result.code === 2000) {
            wx.navigateTo({ url: `../../signin/main?passwd=${this.passwd}` });
          }
        } catch (e) {
          this.showLoading = false;
          this.toShowToast('获取考勤信息出现了问题 :(');
        }
      },

      toShowToast(title = '', delay = 1500) {
        this.showToast = true;
        this.toastText = title;
        setTimeout(() => {
          this.showToast = false;
        }, delay);
      }
    }
  }
</script>

<style lang="less">
  @import "../style.less";
</style>


