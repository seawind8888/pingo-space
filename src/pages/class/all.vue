<template>
  <div class="all-list-container">
    <ul>
      <li :key="item.pk" v-for="item in schoolex">
        <router-link to="detail" class="class-list-container">
          <class-item item-url="{path: '/detail'}" :item-cover="item.icon" :item-title="item.detail" :item-age-min="item.crowd.min_age" :item-age-max="item.crowd.max_age" :item-time="getClassTimeFormat(item.crowd.created_at)" :item-address="item.classroom.detail" :user-portrait="'https://ooo.0o0.ooo/2017/04/08/58e8b3ccc3371.png'"></class-item>
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
