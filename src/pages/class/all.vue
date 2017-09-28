<template>
  <div v-if="classIsReady" class="wrapper">
    <ul class="class-item-container">
      <li :key="index" v-for="(item,index) in classList" class="class-item">
        <img :src="item.cover">
        <div class="item-info-container">
          <div class="info-left">上课时间：{{item.tag}}</div>
          <div class="info-right">{{item.web_content}}</div>
        </div>
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
  created () {
    this.$store.dispatch('getClassInfo')
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/class-all.scss';
</style>
