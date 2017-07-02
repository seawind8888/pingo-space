<template>
  <div class="login-container">
    <input id="abc" placeholder="请输入手机号码" v-model="userName" class="input-container" />
    <input placeholder="请输入密码" type="password" v-model="passWord" class="input-container" />
    <div  @click="singIn()" class="login-btn">登录</div>
    <div class="login-info">点击开始，即表示已阅读并同意<a>《平行国服务协议》</a></div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        userName: '',
        passWord: ''
      }
    },
    methods: {
      singIn () {
        axios('/api/auth/login', {
            method: 'post',
            headers: {
              "Accept": "application/json",
              "Accept-Language": "zh-hans"
            },
            data: {
              mobile: this.userName,
              password: this.passWord
            }
          })
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
</script>
<style lang="scss">
  @import '../assets/css/enterPages.scss';

</style>
