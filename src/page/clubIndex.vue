<template>
  <div class="container">
    <header>
      <img class="header-back" src="../assets/imgs/App/iStock_000045462236_Full@2x.png">
      <div class="header-container">
        <div class="header-title-container">
          <img src="../assets/imgs/App/index-header-icon.png">
          <span>欧美小学课外活动俱乐部</span>
        </div>
        <div class="user-info-container">
          <div class="user-top">
            <img class="user-portrait" src="../assets/imgs/App/img_test.png">
            <div class="number-container">
              <h1>10</h1>
              <span>次</span>
            </div>
            <div class="number-container">
              <h1>10</h1>
              <span>次</span>
            </div>
            <div class="number-container">
              <h1>10</h1>
              <span>次</span>
            </div>
            <div class="number-container">
              <span>2017.01.31</span>
            </div>
          </div>
          <div class="user-bottom">
            <div class="name-container">Sophie</div>
            <div class="number-container">
              <i class="info-point"></i>
              <p>剩余次数</p>
            </div>
            <div class="number-container">
              <i class="info-point"></i>
              <p>已参加</p>
            </div>
            <div class="number-container">
              <i class="info-point"></i>
              <p>总共购买</p>
            </div>
            <div class="number-container">
              <i class="info-point"></i>
              <p>有效期至</p>
            </div>
          </div>
          <div class="vip-info-container">季度会员</div>
        </div>
      </div>
    </header>
    <div class="main">
      <section class="tab-bar-container">
        <div class="tab-item">
          <img class="tab-icon" src="../assets/imgs/App/tab1.png">
          <p>详细介绍</p>
        </div>
        <div class="tab-item">
          <img class="tab-icon" src="../assets/imgs/App/tab2.png">
          <p>往期回顾</p>
        </div>
        <div class="tab-item">
          <img class="tab-icon" src="../assets/imgs/App/tab3.png">
          <p>活动动态</p>
        </div>
        <div class="tab-item">
          <img class="tab-icon" src="../assets/imgs/App/tab4.png">
          <p>报名续费</p>
        </div>
      </section>
      <section class="have-choose-subject">
        <div class="section-title-container">
          <div class="title-container-left">
            <i class="title-icon"></i> 已选课程
          </div>
          <div class="title-container-right">
            全部
            <img src="../assets/imgs/App/check-icon.png">
          </div>
        </div>
        <div>
          <class-item :item-cover="'https://ooo.0o0.ooo/2017/04/08/58e8b43ad64b9.png'" :item-title="'创意绘画艺术启蒙'" :item-time="'2017-03-11 14：00'"
            :item-address="'北京市朝阳区798尤伦斯达瓦达瓦达瓦大'" :user-portrait="'https://ooo.0o0.ooo/2017/04/08/58e8b3ccc3371.png'"></class-item>
        </div>
      </section>
      <section class="have-choose-subject">
        <div class="section-title-container">
          <div class="title-container-left">
            <i class="title-icon"></i> 可选课程
          </div>
          <div class="title-container-right">
            全部
            <img src="../assets/imgs/App/check-icon.png">
          </div>
        </div>
        <div class="channel-tab-container">
          <div class="tab-item item-on">全部</div>
          <div class="tab-item">4-5岁</div>
          <div class="tab-item">6-8岁</div>
          <div class="tab-item">9-12岁</div>
        </div>
        <div>
          <class-item :item-cover="'https://ooo.0o0.ooo/2017/04/08/58e8b43ad64b9.png'" :item-title="'创意绘画艺术启蒙'" :item-time="'2017-03-11 14：00'"
            :item-address="'北京市朝阳区798尤伦斯达瓦达瓦达瓦大'" :user-portrait="'https://ooo.0o0.ooo/2017/04/08/58e8b3ccc3371.png'"></class-item>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import classItem from '../components/classItem'
  export default {
    data() {
      return {
        obj: [{
          name: 'aaa',
          sex: 'bbb'
        }, {
          name: 'aaa',
          sex: 'bbb'
        }],
        combie: []
      }
    },
    mounted() {
      var self = this
    },
    components: {
      classItem
    }
  }

</script>

<style lang="scss">
  @import '../assets/css/clubIndex.scss';

</style>
