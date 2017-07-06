<template>
  <div class="login-container">
    <input v-model="userName" placeholder="请输入手机号码" class="input-container">
    <div class="btn-container">
      <input v-model="verifyCode.code" placeholder="请输入验证码" class="input-container">
      <a v-if="!verifyCode.getting" @click="getVerifyCode()" class="login-btn small-btn">获取验证码</a>
      <a v-else class="login-btn small-btn">{{verifyCode.count}}秒后重试</a>
    </div>
    <input v-model="passWord" placeholder="请输入密码" type="password" class="input-container">
    <input v-model="verifyPassWord" placeholder="请确认密码" type="password" class="input-container">
    <a @click="signUp()" class="login-btn">注册</a>
    <div class="login-info">点击开始，即表示已阅读并同意
      <a>《平行国服务协议》</a>
    </div>
    <toast v-model="toastInfo.isShow" type="text" :time="1000" is-show-mask :text="toastInfo.message"></toast>
    <toast v-model="toastInfo.success"  :time="1000" is-show-mask :text="'注册成功'"></toast>
  </div>
</template>
<script>
import { Toast } from 'vux'
import axios from 'axios'

export default {
  data() {
    return {
      userName: '',
      passWord: '',
      verifyPassWord: '',
      verifyCode: {
        code: '',
        getting: false,
        count: 60
      },
      toastInfo: {
        message: '',
        isShow: false,
        success: false
      }
    }
  },
  components: {
    Toast
  },
  methods: {
    getVerifyCode() {
      //倒计时
      var self = this
      self.verifyCode.getting = true
      setInterval(() => {
        if (self.verifyCode.count < 2) {
          self.verifyCode.getting = false
          this.verifyCode.count = 60
          return
        }
        this.verifyCode.count--
      }, 1000)
      //开始发验证码
      axios({
        method: 'post',
        url: '/api/account/register',
        // url: `${baseURL}/api/auth/login`,
        headers: {
          "Accept": "application/json",
          "Accept-Language": "zh-hans"
        },
        validateStatus: (status) => {
          console.log(status)
          return status >= 200 && status <= 400;//默认
        },
        data: {
          mobile: self.userName,
          scene: 0,
        }
      })
        .then((res) => {
          console.log(res)
                      self.toastInfo.success = true

          // if (res.status == 200) {
          //   // self.toastInfo.message = '注册成功'
          //   self.toastInfo.success = true
          // } else {
          //   self.toastInfo.message = res.data.message
          //   self.toastInfo.isShow = true
          // }
        })
        .catch((err) => {
          console.log(err)
          // return err
        })
    },
    signUp() {
      var self = this
      if (!self.userName) {
        self.toastInfo.message = '请输入正确用户名'
        self.toastInfo.isShow = true
        return
      } else if (!self.verifyCode.code) {
        self.toastInfo.message = '请输入正确验证码'
        self.toastInfo.isShow = true
        return
      } else if (!self.passWord) {
        self.toastInfo.message = '请输入正确密码'
        self.toastInfo.isShow = true
        return
      } else if (self.passWord !== self.verifyPassWord) {
        self.toastInfo.message = '两次密码输入不正确'
        self.toastInfo.isShow = true
        return
      }
      // let baseURL = process.env === 'production' ? 'http://staging.pingospace.com' : ''
      axios({
        method: 'post',
        url: '/api/account/register',
        // url: `${baseURL}/api/auth/login`,
        headers: {
          "Accept": "application/json",
          "Accept-Language": "zh-hans"
        },
        data: {
          mobile: self.userName,
          password: self.passWord,
          code: self.verifyCode.code,
          is_client: 1,
          is_instructor: 0
        }
      })
        .then((res) => {
          console.log(res)
          self.toastInfo.message = '注册成功'
          self.toastInfo.isShow = true
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
  created() {

  }
}
</script>
<style lang="scss">
@import '../assets/css/entryPages.scss';
</style>
