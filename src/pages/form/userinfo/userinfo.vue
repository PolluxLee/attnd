<template>
  <div class="form">
    <!-- 个人信息 -->
    <div class="form__wrapper">
      <div class="form__title">
        <p class="form__title--1">个人信息</p>
        <p class="form__title--2">* 建议使用真实姓名以方便考勤</p>
      </div>
      <div class="form__input">
        <input type="text" 
          placeholder="姓名（必填）" 
          placeholder-style="color:#bababa"
          maxlength="140"
          v-model="name">
      </div>
      <div class="form__input">
        <input type="text"
        placeholder="ID/学号/工号"
        placeholder-style="color:#bababa"
        maxlength="140"
        v-model="stuId">
      </div>
      <!-- <div class="form__input">
        <input type="text"
        placeholder="邮箱（用于导出表）"
        placeholder-style="color:#bababa"
        maxlength="140"
        v-model="email">
      </div> -->
      <div class="form__release" @click="updateUserInfo">
        <p>保存</p>
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
        email: ''
      }
    },

    components: {
      'at-loading': AtLoading,
      'at-toast': AtToast
    },

    methods: {
      onLoad() {
        this.initData();
      },

      initData() {
        this.getUserInfo();
      },

      async getUserInfo() {
        try {
          if (this.showLoading) return;
          this.showLoading = true;

          let result = await getUserInfoService();

          if (result.code === 2000) {
            let { name, stuId, email } = result.data.payload;
            this.name = name;
            this.stuId = stuId;
            this.email = email;
          }

          setTimeout(() => { this.showLoading = false; }, 500);
        } catch (e) {
          setTimeout(() => { this.showLoading = false; }, 500);
          this.toShowToast('获取信息出现了问题 :(');
        }
      },

      async updateUserInfo() {
        try {
          if (this.showLoading) return;
          this.showLoading = true;

          let result = await updateUserInfoService({
            name: this.name,
            stuId: this.stuId,
            email: this.email
          });
          this.showLoading = false;

          if (result.code === 2000) {
            wx.navigateBack();
          }
        } catch (e) {
          this.showLoading = false;
          this.toShowToast('获取信息出现了问题 :(');
        }
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
</script>

<style lang="less">
  @import "../style.less";
</style>


