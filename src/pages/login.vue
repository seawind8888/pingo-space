<template>
  <div class="login-container">
    <input id="abc" placeholder="请输入手机号码" v-model="userName" class="input-container">
    <input placeholder="请输入密码" type="password" v-model="passWord" class="input-container">
    <div @click="signIn()" class="login-btn">登录</div>
    <div class="login-info">点击开始，即表示已阅读并同意
      <a>《平行国服务协议》</a>
    </div>
    <toast v-model="toastInfo.isShow" type="text" :time="1000" is-show-mask :text="toastInfo.message"></toast>
  </div>
</template>
<script>
  // import axios from 'axios'
  import Qs from 'qs'
  import {
    Toast
  } from 'vux'
  import 'whatwg-fetch'
  export default {
    data() {
      return {
        userName: '',
        passWord: '',
        toastInfo: {
          message: '',
          isShow: false
        }
      }
    },
    components: {
      Toast
    },
    methods: {
      signIn() {
        var self = this
        let baseURL = process.env.NODE_ENV === 'production' ? 'http://staging.pingospace.com' : ''
        var dataInfo = new FormData()
        dataInfo.append('mobile', self.userName)
        dataInfo.append('password', self.passWord)
        // var dataInfo = {
        //     mobile: self.userName,
        //     password: self.passWord
        //   }
        // $.ajax({
        //   url: "http://staging.pingospace.com/api/auth/login",
        //   data: {
        //     mobile: self.userName,
        //     password: self.passWord
        //   },
        //   type: 'post',
        //   success: (res) => {
        //     console.log(res)
        //     self.toastInfo.message = '登录成功'
        //     self.toastInfo.isShow = true
        //     window.localStorage.token = res.token.key
        //     // self.$store.state.token = localStorage.token
        //     window.localStorage.time = Date.parse(res.token.expires_at)
        //     window.localStorage.pk = res.user.pk
        //     setTimeout(function () {
        //       self.$router.push('/home')
        //     }, 1200);
        //   }
        // })
        return fetch('http://staging.pingospace.com/api/auth/login', {
            method: 'post',
            body: dataInfo
          })
          .then((response) => response.json())
          .then((res) => {
            self.toastInfo.message = '登录成功'
            self.toastInfo.isShow = true
            localStorage.token = res.token.key
            // self.$store.state.token = localStorage.token
            localStorage.time = Date.parse(res.token.expires_at)
            localStorage.pk = res.user.pk
            console.log(this.$route.query.source === 'all')
            if (this.$route.query.source === 'all') {
              setTimeout(function () {
                self.$router.push('/class-all')
              }, 1200);
              return
            }
            setTimeout(function () {
              self.$router.push('/home')
            }, 1200);
          })
          .catch((err) => {
            console.log(err)
            self.toastInfo.message = '登录失败',
              self.toastInfo.isShow = true
          })
      }
    },
    mounted () {
      console.log(this.$route.query.source)
    }
  }

</script>
<style lang="scss">
  @import '../assets/css/entry-pages.scss';

</style>
