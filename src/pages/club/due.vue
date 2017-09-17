<template>
  <div class="wrap">
    <section class="sign-info-section club-due-container">
      <div class="section-title-container title-sign-up">
        <div class="title-container">
          <i class="title-icon"></i> 订单信息
        </div>
      </div>
      <div class="section-info-container">
        <p class="section-info-inline"><span>测试卡</span><span class="center-info">5次课程</span><span>￥0</span></p>
      </div>
      <div class="section-title-container title-sign-up">
        <div class="title-container">
          <i class="title-icon"></i> 请选择支付方式
        </div>
      </div>
    </section>
    <footer @click="submitDue" class="footer-button">
      支付
    </footer>
  </div>
</template>

<script>
  export default {}

</script>

<style lang="scss">
  @import '../../assets/css/club.scss';

</style>
