<template>
  <div v-if="isReady" class="index-container">
    <header class="index-header">
      <swiper :list="recommendations" auto style="width:100%;margin:0 auto;" height="230px" dots-class="custom-bottom" dots-position="center"></swiper>
    </header>
    <div class="main">
      <section class="tab-bar-container">
        <div class="tab-item">
          <img class="tab-icon" src="../assets/imgs/App/tab1.png">
          <p>周末班</p>
        </div>
        <div class="tab-item">
          <img class="tab-icon" src="../assets/imgs/App/tab2.png">
          <p>节假日班</p>
        </div>
        <div class="tab-item">
          <img class="tab-icon" src="../assets/imgs/App/tab3.png">
          <p>寒暑假班</p>
        </div>
        <div class="tab-item">
          <img class="tab-icon" src="../assets/imgs/App/tab4.png">
          <p>VIP上门</p>
        </div>
      </section>
      <section class="choose-class-container">
        <div class="section-title-container">
          <div class="title-container-left">
            <i class="title-icon"></i> 近期课程
          </div>
        </div>
        <div :key="dateItem.begin" v-for="dateItem in schoolexDateBox">
          <div class="class-time-container">
            <img src="../assets/imgs/App/time-icon.png" /> {{dateItem.begin}}
          </div>
          <div class="class-part-container">
            <ul>
              <li :key="item.pk" v-for="item in dateItem.class">
                <router-link :to="'/club-detail/'+item.pk" class="class-list-container">
                  <class-item :item-cover="item.icon" :item-title="item.detail" :item-age-min="item.crowd.min_age" :item-age-max="item.crowd.max_age"
                    :item-time="getClassTimeFormat(item.crowd.created_at)" :item-address="addressFilter(item.classroom.title)"
                    :item-status="item.dynamic_status" :item-enrollments-count="item.enrollments_count" :item-max-humans="item.max_humans"
                    :user-portrait="item.assistant_ref"></class-item>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import classItem from '../components/classItem'
  import {
    Swiper
  } from 'vux'
  import {
    mapState,
    mapActions
  } from 'vuex'
  import {
    fmtDate
  } from '../utils.js'
  export default {
    data() {
      return {
        ageStage: 'all',
        emptyFilter: 0,
        imgList: [{
            url: 'javascript:;',
            img: 'https://i.loli.net/2017/09/13/59b8dd71637e0.png'
          },
          {
            url: 'javascript:;',
            img: 'https://i.loli.net/2017/09/13/59b8dd71637e0.png'
          },
          {
            url: 'javascript:;',
            img: 'https://i.loli.net/2017/09/13/59b8dd71637e0.png'
          }

        ]
      }
    },
    computed: {
      ...mapState(['learnex', 'schoolex', 'isReady', 'enrollments', 'schoolexDateBox', 'recommendations']),
    },
    components: {
      classItem,
      Swiper
    },
    methods: {
      ...mapActions(['getRecommendations','getLearnType']),

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
      },
    },
    mounted() {
      this.$store.dispatch('getSchoolexInfo', {userid: window.localStorage.pk})
      this.getRecommendations()
      this.getLearnType()
      if (localStorage.token) {
        this.$store.dispatch('getUserInfo', localStorage.pk)
        // this.$store.dispatch('getEnrollmentsInfo', localStorage.pk)
      }
    }
  }

</script>

<style lang="scss" scope>
  @import '../assets/css/clubIndex.scss';

</style>
