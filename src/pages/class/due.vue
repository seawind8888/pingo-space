<template>
  <div class="container sign-up-container">
    <header class="sign-up-header">
      <div class="header-title-container">
        <img :src="schoolexCell.learn.icon" /> 
        {{schoolexCell.learn.detail}}
      </div>
      <div class="header-item-container">
        <div class="item-left">
          <img src="https://ooo.0o0.ooo/2017/04/08/58e8b43ad64b9.png">
        </div>
        <div class="item-right">
          <div class="right-title">
            {{schoolexCell.topic.detail}}
            <span class="item-price">￥396</span>
          </div>
          <div class="right-info">
            <p>年龄：{{schoolexCell.crowd.min_age}}-
              {{schoolexCell.crowd.max_age}}岁</p>
            <p>课程活动</p>
          </div>
        </div>
      </div>
    </header>
    <section class="sign-info-section">
      <div class="section-title-container title-sign-up">
        <div class="title-container">
          <i class="title-icon"></i> 服务时间和地点
        </div>
      </div>
      <div class="section-info">
        <router-link to="/address">
          <div class="section-info-container">
            <p>{{schoolexCell.classroom.title |
              addressFilter(schoolexCell.classroom.title)}}
              <span class="info-tag">
                <!-- <img class="info-icon" src="../../assets/imgs/classDetails/class-list-enter-icon.png" /> -->
              </span>
            </p>
          </div>
        </router-link>
        <div class="section-info-container">
          <p>2017.09.09（周一）10-12点
            <span class="info-tag">
              <!-- <img class="info-icon" src="../../assets/imgs/classDetails/class-list-enter-icon.png" /> -->
            </span>
          </p>
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
    <section class="sign-info-section">
      <div class="section-title-container title-sign-up">
        <div class="title-container">
          <i class="title-icon"></i> 会员卡支付
        </div>
      </div>
      <div class="section-info-container">
        <h1>季度卡会员</h1>
        <p>剩余可用次数
          <b>8</b>次
          <span class="info-tag">扣
            <b>1</b>次课程次数
            <input class="info-radio" checked type="radio" />
          </span>
        </p>
      </div>
    </section>
    <footer class="sign-up-btn">
      下一步
    </footer>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['schoolexCell', 'isReady']),
  },
  filters: {
    addressFilter(addr) {
      let site
      Object.keys(addr).forEach((key) => {
          site = addr['zh-hans']
      })
      return site
    }
  },
  created () {

  }
}

</script>
<style lang="scss">
@import '../../assets/css/class-due.scss';
</style>
