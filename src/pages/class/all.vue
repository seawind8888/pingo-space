<template>
  <div v-if="classIsReady">
    <ul v-if="classList.length>0" class="class-item-container">
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
    <div v-else class="no-class-block">
      <img src="../../assets/imgs/schedule-block.png">
      <div class="block-info">购买课程后，请耐心等待</div>
      <div class="block-info">分班后，再开始上课</div>
    </div>
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
      let curTime = Date.parse(new Date())
      if (!localStorage.time || localStorage.time < curTime) {
        this.$router.push('/login?source=all')
        return
      }
      this.$store.dispatch('getClassInfo', {
        user: window.localStorage.pk
      })
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../assets/css/reset.scss';
  @import '../../assets/css/class-all.scss';

</style>
