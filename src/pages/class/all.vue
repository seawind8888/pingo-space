<template>
  <div v-if="classIsReady">
    <ul class="class-item-container">
      <li :key="index" v-for="(item,index) in classList" class="class-item">
        <router-link :to="'/class-schedule/' + item.pk">
          <img :src="item.cover">
          <div class="item-info-container">
            <div class="item-info-content">
              <div class="info-left">上课时间：{{item.tag}}</div>
              <div class="info-right">{{item.web_content}}</div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    computed: {
      ...mapState(['classList', 'classIsReady']),
    },
    created() {
      this.$store.dispatch('getClassInfo', {user: window.localStorage.pk})
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../assets/css/class-all.scss';

</style>
