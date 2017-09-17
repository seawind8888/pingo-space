<template>
  <div>
    <section>
      <div class="header-item-container">
        <div class="item-left">
          <img src="https://ooo.0o0.ooo/2017/04/08/58e8b43ad64b9.png">
        </div>
        <div class="item-right">
          <div class="right-title">
            1111
            <span class="item-price">￥396</span>
          </div>
          <div class="right-info">
            <p>年龄：9- 12岁
            </p>
            <p>课程活动</p>
          </div>
        </div>
      </div>
    </section>
    <section class="sign-info-section">
      <div class="section-title-container title-sign-up">
        <div class="title-container">
          <i class="title-icon"></i> 报名学生信息
        </div>
      </div>
      <div class="section-info-container">
        <p>报名人：悦悦
          <span class="info-tag">13810788207</span>
        </p>
        <p>英文名：Dora</p>
        <p>年龄：5岁</p>
        <p>身高体重：140cm，35kg</p>
        <p>英文水平：中等</p>
      </div>
    </section>
    <router-link to="/club-join">
      <footer class="footer-button">
        支付
      </footer>
    </router-link>
  </div>
</template>

<script>
  export default {}

</script>

<style lang="scss">
  @import '../../assets/css/club-detail.scss';

</style>
