<template>
  <div class="enter-container">
    <img style="width: 100%" class="enter-back-img" src="../assets/imgs/enter.png">
    <div class="quick-start">
      <img src="../assets/imgs/quick-start.png">
    </div>
    <div class="btn-container">
      <router-link class="enter-btn" :to='"/login"'>
        登录
      </router-link>
      <router-link class="enter-btn right-btn" to='/regist'>
        注册
      </router-link>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  methods: {

  },
  created() {
    let curTime = Date.parse(new Date())
    if (localStorage.time && localStorage.time > curTime) {
      this.$router.push('/home')
      // this.$store.state.token = localStorage.token
    }
  }
}
</script>
<style lang="scss">
@import '../assets/css/entry-pages.scss';
</style>