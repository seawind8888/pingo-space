<template>
  <div id="app">
    <div class="container">
      <header>
        <img class="header-back" src="./assets/imgs/App/iStock_000045462236_Full@2x.png">
        <div class="header-container">
          <div class="header-title-container">
            <img src="./assets/imgs/App/index-header-icon.png">
            <span>欧美小学课外活动俱乐部</span>
          </div>
          <div class="user-info-container">
            <div class="user-top">
              <img class="user-portrait" src="./assets/imgs/App/img-test.png">
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
            <img class="tab-icon" src="./assets/imgs/App/tab1.png">
            <p>详细介绍</p>
          </div>
          <div class="tab-item">
            <img class="tab-icon" src="./assets/imgs/App/tab2.png">
            <p>往期回顾</p>
          </div>
          <div class="tab-item">
            <img class="tab-icon" src="./assets/imgs/App/tab3.png">
            <p>活动动态</p>
          </div>
          <div class="tab-item">
            <img class="tab-icon" src="./assets/imgs/App/tab4.png">
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
              <img src="./assets/imgs/App/check-icon.png">
            </div>
          </div>
          <ul>
            <li class="subject-item-container choose-back">
              <div class="item-container">
                <div class="item-left">
                  <img src="./assets/imgs/App/list-img-test.png"></div>
                <div class="item-middle">
                  <div class="item-title-container">创意绘画艺术启蒙</div>
                  <div class="item-info-container">
                    通用年龄:4-5岁
                  </div>
                  <div class="item-info-container">
                    时&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp间: 2017-03-11 14：00
                  </div>
                  <div class="item-info-container">
                    地&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp点: 北京市朝阳区798尤伦斯达瓦达瓦达瓦大
                  </div>
                </div>
                <div class="item-right">
                  <p class="right-info-one">已报名</p>
                  <p>10/15</p>
                  <div class="portrait-container">
                    <img src="./assets/imgs/App/img-test.png">
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section class="have-choose-subject">
          <div class="section-title-container">
            <div class="title-container-left">
              <i class="title-icon"></i> 可选课程
            </div>
            <div class="title-container-right">
              全部
              <img src="./assets/imgs/App/check-icon.png">
            </div>
          </div>
          <div class="channel-tab-container">
            <div class="tab-item item-on">全部</div>
            <div class="tab-item">4-5岁</div>
            <div class="tab-item">6-8岁</div>
            <div class="tab-item">9-12岁</div>
          </div>
          <ul>
            <li class="subject-item-container">
              <div class="item-container">
                <div class="item-left">
                  <img src="./assets/imgs/App/list-img-test.png"></div>
                <div class="item-middle">
                  <div class="item-title-container">创意绘画艺术启蒙</div>
                  <div class="item-info-container">
                    通用年龄:4-5岁
                  </div>
                  <div class="item-info-container">
                    时&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp间: 2017-03-11 14：00
                  </div>
                  <div class="item-info-container">
                    地&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp点: 北京市朝阳区798尤伦斯达瓦达瓦达瓦大
                  </div>
                </div>
                <div class="item-right">
                  <p class="right-info-one">已报名</p>
                  <p>10/15</p>
                  <div class="portrait-container">
                    <img src="./assets/imgs/App/img-test.png">
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
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

    }
  }

</script>

<style lang="scss">
  @import './assets/css/reset.scss';
  @import './assets/css/App.scss';

</style>
