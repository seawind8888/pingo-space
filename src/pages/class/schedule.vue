<template>
  <div class="index-container">
    <header class="index-header">
      <div></div>
      <img style="position:relative" src="../../assets/imgs/App/class-back-img.png">
    </header>
    <section class="choose-class-container">
      <div class="class-part-container">
        <ul>
          <li :key="item.pk" v-for="item in schoolex">
            <router-link :to="'/class-detail/' + item.pk" class="class-list-container">
              <class-item :item-cover="item.icon" :item-title="item.detail" :item-age-min="item.crowd.min_age" :item-age-max="item.crowd.max_age"
                :item-time="getClassTimeFormat(item.crowd.created_at)" :item-address="addressFilter(item.classroom.title)"
                :item-status="item.dynamic_status" :item-enrollments-count="item.enrollments_count" :item-max-humans="item.max_humans"
                :user-portrait="item.assistant_ref"></class-item>
            </router-link>
          </li>
        </ul>
      </div>
      <div v-if="schoolex.length === 0" class="no-class-block">
        <img src="../../assets/imgs/schedule-block.png">
        <div class="block-info">请耐心等待排课，排好课后，可在这里查看课程表的安排哦。</div>
      </div>
    </section>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import classItem from '../../components/classItem'

  import {
    fmtDate
  } from '../../utils.js'
  export default {
    computed: {
      ...mapState(['schoolex']),
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
    },
    mounted() {
      this.$store.dispatch('getSchoolexInfo', {
        classgroup: this.$route.params.id,
        userid: window.localStorage.pk
      })
    }
  }

</script>

<style lang="scss" scope>
  @import '../../assets/css/reset.scss';
  @import '../../assets/css/clubIndex.scss';

</style>
