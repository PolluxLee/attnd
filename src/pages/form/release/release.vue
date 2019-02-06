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
        <input type="text"
          placeholder="例如：计网-计科151"
          placeholder-style="color:#bababa"
          focus="true"
          v-model="attndName">
      </div>
      <div class="form__release" @click="onSubmitAttnd">
        <p>立即发起</p>
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
  import { getTime } from '@/utils/get-time';
  import { getLocationService } from '@/services/location.service';
  import { createAttndService } from '@/services/attnd.service';
  
  export default {
    data() {
      return {
        showLoading: false,
        loadingText: '请稍后...',
        showToast: false,
        toastText: '',

        attndName: ''
      }
    },
    components: {
      'at-loading': AtLoading,
      'at-toast': AtToast
    },
    methods: {
      async onSubmitAttnd() {
        if (!this.attndName) {
          this.showToast = true;
          this.toastText = '名称不能为空';
          setTimeout(() => {
            this.showToast = false;
          }, 1000);
          return;
        }

        if (this.showLoading) return;
        this.showLoading = true;

        // 获取地理位置
        let location = await getLocationService();
        if (!location) {
          wx.navigateTo({ url: `../${PageTypes.AUTH}/main` });
          this.showLoading = false;
          return;
        }

        // 获取当前时间
        let time = getTime();

        let result = await createAttndService({
          attndName: this.attndName,
          location,
          time
        });

        this.showLoading = false;

        switch (result.code) {
          case 2000:
            this.showToast = true;
            this.toastText = '创建成功';
            setTimeout(() => {
              this.showToast = false;
            }, 1000);
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
    }
  }
</script>

<style lang="less">
  @import "../style.less";
</style>


