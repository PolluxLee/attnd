<template>
  <div class="signin-footer" @click="onClick">
    <div class="signin-footer__confirm" :style="getBtnStyle">
      <p>{{getBtnText}}</p>
    </div>
  </div>
</template>

<script>
  /**
   * belonging: Boolean，为 true 时本人为考勤发布者
   * attndStatus: Number，0-->考勤已结束，1-->考勤进行中
   * signinStatus: Number，-1-->未签到，0-->超出距离，1-->已到，2-->迟到
   */
  export default {
    props: {
      btnHeight: {
        type: Number,
        default: 90, // rpx
      },
      belonging: {
        type: Boolean,
        default: true
      },
      attndStatus: {
        type: Number,
        default: 0
      },
      signinStatus: {
        type: Number,
        default: -1
      }
    },

    computed: {
      getBtnText() {
        return this.belonging
          ? this.attndStatus === 0 ? '已结束' : '结束'
          : this.signinStatus < 0 ? '签到' : '已签到'
      },
      getBtnStyle() {
        let background = this.belonging
          ? this.attndStatus === 0 ? '#838383' : '#e64340'
          : this.signinStatus < 0 ? '#3ABB69' : '#838383';
        return `
          height: ${this.btnHeight}rpx;
          background: ${background};
        }`;
      }
    },

    methods: {
      onClick() {
        if (this.belonging && this.attndStatus === 1) {
          this.$emit('update-attnd');
        } else if (!this.belonging && this.signinStatus < 0) {
          this.$emit('signin');
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/style/_variables.less";

  .signin-footer {
    &__confirm {
      background: @theme;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1;
      color: white;
      font-size: 36rpx;
    }
  }
</style>

