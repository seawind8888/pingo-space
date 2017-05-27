<template>
  <div class="login-container">
    <input placeholder="请输入手机号码" class="input-container" />
    <input placeholder="请输入密码" type="password" class="input-container" />
    <router-link to="/home" class="login-btn">登录</router-link>
    <div class="login-info">点击开始，即表示已阅读并同意<a>《平行国服务协议》</a></div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="scss">
  @import '../assets/css/enterPages.scss';

</style>
