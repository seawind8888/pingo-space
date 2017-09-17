<template>
  <div class="wrap">
    <section class="sign-info-section">
      <div class="section-title-container title-sign-up">
        <div class="title-container">
          <i class="title-icon"></i> 会员卡支付
        </div>
      </div>
      <div class="section-info-container">
        <div class="vip-top-container">
          <h1 class="vip-top-title">季度卡会员</h1>
          <input class="info-radio" @change="vipChangeAction" type="radio" />
        </div>
        <p>剩余可用次数
        </p>
        <p><span>包含1元</span> <span><b>现价0元</b></span></p>
      </div>
      <div class="agreement-info-container">
        <p>点击“下一步”，即表示已阅读并同意<a>《会员服务协议》</a></p>
      </div>
    </section>
    <footer @click="submitDue" class="footer-button">
      下一步
    </footer>
    <toast v-model="toastInfo.isShow" type="text" :time="1000" is-show-mask :text="toastInfo.message"></toast>

  </div>
</template>

<script>
  import {
    Toast
  } from 'vux'

  export default {
    data() {
      return {
        vipTypeChecked: false,
        toastInfo: {
          message: '',
          isShow: false
        }
      }
    },
    components: {
      Toast
    },
    methods: {
      vipChangeAction(e) {
        this.vipTypeChecked = e.target.checked
      },
      submitDue() {
        if (this.vipTypeChecked) {
          this.$router.push('/club-detail')
        } else {
          this.toastInfo.message = '请选择会员类型',
            this.toastInfo.isShow = true
        }
      }
    }
  }

</script>

<style lang="scss" scope>
  @import '../../assets/css/reset.scss';
  @import '../../assets/css/class-due.scss';
  @import '../../assets/css/join-club.scss';

</style>
