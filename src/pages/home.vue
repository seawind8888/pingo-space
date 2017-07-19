<template>
  <div v-if="isReady" class="index-container">
    <header class="index-header">
      <img class="header-back" src="../assets/imgs/App/iStock_000045462236_Full@2x.png">
      <div class="index-header-container">
        <div class="header-title-container">
          <img src="../assets/imgs/App/index-header-icon.png">
          <span>{{learnex.detail}}</span>
        </div>
        <div class="user-info-container">
          <div class="user-top">
            <img class="user-portrait" src="../assets/imgs/App/img_test.png">
            <div class="number-container">
              <h1 class="number-tag">10</h1>
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
              <span class="line-time-container">2017.01.31</span>
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
      <section v-if="enrollments.length>0" class="choose-class-container">
        <div class="section-title-container">
          <div class="title-container-left">
            <i class="title-icon"></i> 已选课程
          </div>
          <router-link to="/all">
            <div class="title-container-right title-right-index">
              全部
              <img src="../assets/imgs/App/check-icon.png">
            </div>
          </router-link>
        </div>
        <div class="have-choose-class">
          <router-link to="/detail" class="class-list-container">
            <class-item :item-cover="'https://ooo.0o0.ooo/2017/04/08/58e8b43ad64b9.png'" :item-title="'创意绘画艺术启蒙'" :item-time="'2017-03-11 14：00'" :item-address="'北京市朝阳区798尤伦斯达瓦达瓦达瓦大'" :user-portrait="'https://ooo.0o0.ooo/2017/04/08/58e8b3ccc3371.png'"></class-item>
          </router-link>
        </div>
      </section>
      <section class="choose-class-container">
        <div class="section-title-container">
          <div class="title-container-left">
            <i class="title-icon"></i> 可选课程
          </div>
          <router-link to="/all">
            <div class="title-container-right title-right-index">
              全部
              <img src="../assets/imgs/App/check-icon.png">
            </div>
          </router-link>
        </div>
        <div class="channel-tab-container">
          <div @click="selectStage('all')" :class="ageStage=='all'?'item-on':''" class="tab-item">全部</div>
          <div @click="selectStage('small')" :class="ageStage=='small'?'item-on':''" class="tab-item">4-5岁</div>
          <div @click="selectStage('middle')" :class="ageStage=='middle'?'item-on':''" class="tab-item">6-8岁</div>
          <div @click="selectStage('high')" :class="ageStage=='high'?'item-on':''" class="tab-item">9-12岁</div>
        </div>
        <div v-show="ageStage=='all'">
          <!--<div class="class-time-container">
                                    <img src="../assets/imgs/App/time-icon.png" /> 03月11日&nbsp(周六)
                                  </div>-->
          <div class="class-part-container">
            <!--<router-link to="detail" class="class-list-container">
                            <class-item item-url="{path: '/detail'}" :item-cover="'https://ooo.0o0.ooo/2017/04/08/58e8b43ad64b9.png'" :item-title="'创意绘画艺术启蒙'" :item-time="'2017-03-11 14：00'" :item-address="'北京市朝阳区798尤伦斯达瓦达瓦达瓦大'" :user-portrait="'https://ooo.0o0.ooo/2017/04/08/58e8b3ccc3371.png'"></class-item>
                          </router-link>-->
            <ul>
              <li :key="item.pk" v-for="item in schoolex">
                <router-link :to="'/detail/'+item.pk" class="class-list-container">
                  <class-item :item-cover="item.icon" :item-title="item.detail" :item-age-min="item.crowd.min_age" :item-age-max="item.crowd.max_age" :item-time="getClassTimeFormat(item.crowd.created_at)" :item-address="addressFilter(item.classroom.title)" :item-status="item.dynamic_status" :item-enrollments-count="item.enrollments_count" :item-max-humans="item.max_humans" :user-portrait="item.assistant_ref"></class-item>
                </router-link>
              </li>
            </ul>
          </div>
          <div v-if="schoolex.length === 0" class="no-class-block">
            <img src="../assets/imgs/App/class-block.png">
            <div class="block-info">小编正在努力排课中...</div>
          </div>
        </div>
        <div v-show="ageStage=='small'">
          <div class="class-part-container">
            <ul>
              <li :key="item.pk" v-for="item in ageStageFilter(schoolex,4,5)">
                <router-link :to="'/detail/'+item.pk"  class="class-list-container">
                  <class-item :item-cover="item.icon" :item-title="item.detail" :item-age-min="item.crowd.min_age" :item-age-max="item.crowd.max_age" :item-time="getClassTimeFormat(item.crowd.created_at)" :item-address="addressFilter(item.classroom.title)" :item-status="item.dynamic_status" :item-enrollments-count="item.enrollments_count" :item-max-humans="item.max_humans" :user-portrait="item.assistant_ref"></class-item>
                </router-link>
              </li>
            </ul>
          </div>
          <div v-if="!emptyFilter" class="no-class-block">
            <img src="../assets/imgs/App/class-block.png">
            <div class="block-info">小编正在努力排课中...</div>
          </div>
        </div>
        <div v-show="ageStage=='middle'">
          <div class="class-part-container">
            <ul>
              <li :key="item.pk" v-for="item in ageStageFilter(schoolex,6,8)">
                <router-link :to="'/detail/'+item.pk"  class="class-list-container">
                  <class-item :item-cover="item.icon" :item-title="item.detail" :item-age-min="item.crowd.min_age" :item-age-max="item.crowd.max_age" :item-time="getClassTimeFormat(item.crowd.created_at)" :item-address="addressFilter(item.classroom.title)" :item-status="item.dynamic_status" :item-enrollments-count="item.enrollments_count" :item-max-humans="item.max_humans" :user-portrait="item.assistant_ref"></class-item>
                </router-link>
              </li>
            </ul>
          </div>
          <div v-if="emptyFilter" class="no-class-block">
            <img src="../assets/imgs/App/class-block.png">
            <div class="block-info">小编正在努力排课中...</div>
          </div>
        </div>
        <div v-show="ageStage=='high'">
          <div class="class-part-container">
            <ul>
              <li :key="item.pk" v-for="item in ageStageFilter(schoolex,9,12)">
                <router-link :to="'/detail/'+item.pk"  class="class-list-container">
                  <class-item :item-cover="item.icon" :item-title="item.detail" :item-age-min="item.crowd.min_age" :item-age-max="item.crowd.max_age" :item-time="getClassTimeFormat(item.crowd.created_at)" :item-address="addressFilter(item.classroom.title)" :item-status="item.dynamic_status" :item-enrollments-count="item.enrollments_count" :item-max-humans="item.max_humans" :user-portrait="item.assistant_ref"></class-item>
                </router-link>
              </li>
            </ul>
          </div>
          <div v-if="emptyFilter" class="no-class-block">
            <img src="../assets/imgs/App/class-block.png">
            <div class="block-info">小编正在努力排课中...</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import classItem from '../components/classItem'
import { mapState } from 'vuex'
import { fmtDate } from '../utils.js'
export default {
  data() {
    return {
      ageStage: 'all',
      emptyFilter: 0
    }
  },
  computed: {
    ...mapState(['learnex', 'schoolex', 'isReady', 'enrollments']),
  },
  components: {
    classItem
  },
  methods: {
    getClassTimeFormat(time) {
      return fmtDate(new Date(Date.parse(time)), 1);
    },
    addressFilter(addr) {
      let site
      Object.keys(addr).forEach((key) => {
          site = addr['zh-hans']
      })
      return site
    },
    selectStage(stage) {
      this.ageStage = stage
    },
    ageStageFilter(items, minAge, maxAge) {
      var self = this
      return items.filter((item, index) => {
        let itemFilter = item.crowd.min_age >= minAge && item.crowd.max_age <= maxAge
        let filterCount = 0
        if (itemFilter) {
          self.emptyFilter = filterCount++
        }
        return itemFilter
      })
    }
  },
  created() {
    this.$store.dispatch('getHomeInfo')
    if (localStorage.pk) {
      this.$store.dispatch('getUserInfo', localStorage.pk)
      this.$store.dispatch('getEnrollmentsInfo', localStorage.pk)
    }
  }
}

</script>

<style lang="scss">
@import '../assets/css/clubIndex.scss';
</style>
