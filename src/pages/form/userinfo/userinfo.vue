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
          v-model="name">
      </div>
      <div class="form__input">
        <input type="text"
        placeholder="ID/学号/工号"
        placeholder-style="color:#bababa"
        v-model="stuId">
      </div>
      <div class="form__release" @click="updateUserInfo">
        <p>保存</p>
      </div>
    </div>
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
    methods: {
      initData() {
        switch (this.type) {
          case PageTypes.SELF: 
            this.getUserInfo();
            break;
        }
      },
      onAuthConfirm() {
        wx.openSetting()
      },
      async getUserInfo() {
        if (this.showLoading) return;
        this.showLoading = true;

        let result = await getUserInfoService();
        this.showLoading = false;

        switch (result.code) {
          case 3001: return;
          case 2000: 
            let { name, stuId } = result.data.payload;
            this.name = name;
            this.stuId = stuId;
            return;
          default:
            this.showToast = true;
            this.toastText = '获取信息失败';
            setTimeout(() => {
              this.showToast = false;
            }, 1000);
            return;
        }
      },
      async updateUserInfo() {
        if (this.showLoading) return;
        this.showLoading = true;

        let result = await updateUserInfoService({
          name: this.name,
          stuId: this.stuId
        });
        this.showLoading = false;

        switch (result.code) {
          case 2000:
            this.globalData.isUserInfoUpdated = true;
            wx.navigateBack();
            return;
          default:
            this.showToast = true;
            this.toastText = '提交失败';
            setTimeout(() => {
              this.showToast = false;
            }, 1000);
            return;
        }
      }
    },
    onLoad() {
      this.initData();
    }
  }
</script>

<style lang="less">
  @import "../style.less";
</style>


