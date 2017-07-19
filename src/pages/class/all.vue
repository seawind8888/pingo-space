<template>
  <div class="all-list-container">
    <ul>
      <li :key="item.pk" v-for="item in schoolex">
        <router-link :to="'/detail/'+item.pk"  class="class-list-container">
           <class-item :item-cover="item.icon" :item-title="item.detail" :item-age-min="item.crowd.min_age" :item-age-max="item.crowd.max_age" :item-time="getClassTimeFormat(item.crowd.created_at)" :item-address="item.classroom.detail" :item-status="item.dynamic_status" :item-enrollments-count="item.enrollments_count" :item-max-humans="item.max_humans" :user-portrait="item.assistant_ref"></class-item>
                </router-link>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import classItem from '../../components/classItem'
import { mapState } from 'vuex'
import { fmtDate } from '../../utils.js'
export default {
  components: {
    classItem
  },
  computed: {
    ...mapState(['learnex','schoolex', 'isReady']),
  },
  methods: {
    getClassTimeFormat(time) {
      return fmtDate(new Date(Date.parse(time)));
    },
    created() {

    }
  }
}

</script>
<style lang="scss">
@import '../../assets/css/classAll.scss';
</style>
