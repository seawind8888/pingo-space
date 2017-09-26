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
  import axios from 'axios'
  import Qs from 'qs'
  import {
    Toast
  } from 'vux'

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
        $.ajax({
          url: "http://staging.pingospace.com/api/auth/login",
          data: {
            mobile: self.userName,
            password: self.passWord
          },
          type: 'post',
          success:(res) => {
             console.log(res)
            self.toastInfo.message = '登录成功'
            self.toastInfo.isShow = true
            window.localStorage.token = res.token.key
            // self.$store.state.token = localStorage.token
            window.localStorage.time = Date.parse(res.token.expires_at)
            window.localStorage.pk = res.user.pk
            setTimeout(function () {
              self.$router.push('/home')
            }, 1200);
          }
        })
        // axios({
        //     method: 'post',
        //     baseURL: 'http://staging.pingospace.com',
        //     url: '/api/auth/login',
        //     headers: {
        //       // "Accept": "application/json",
        //       // "Accept-Language": "zh-hans",
        //       "Content-Type": "application/x-www-form-urlencoded"
        //     },
        //     // responseType: 'json',
        //     // data: {
        //     //   mobile: this.userName,
        //     //   password: this.passWord
        //     // },
        //     // withCredentials: true,
        //     // transformRequest: [function (data) {
        //     //   let formData = Qs.stringify(data)
        //     //   return formData
        //     // }],
        //     data: dataInfo
        //     // data: `mobile=${this.userName}&password=${this.passWord}`
        //     // data: Qs.stringify(dataInfo)
        //   })
        //   .then((res) => {
        //     console.log(res)
        //     self.toastInfo.message = '登录成功'
        //     self.toastInfo.isShow = true
        //     localStorage.token = res.data.token.key
        //     // self.$store.state.token = localStorage.token
        //     localStorage.time = Date.parse(res.data.token.expires_at)
        //     localStorage.pk = res.data.user.pk
        //     setTimeout(function () {
        //       self.$router.push('/home')
        //     }, 1200);
        //   })
        //   .catch((err) => {
        //     console.log(err)
        //     self.toastInfo.message = '登录失败',
        //       self.toastInfo.isShow = true

        //   })
      }
    }
  }

</script>
<style lang="scss">
  @import '../assets/css/entry-pages.scss';

</style>
