<template>
  <div class="login-container">
    <input placeholder="请输入手机号码" class="input-container" />
    <div class="btn-container">
      <input placeholder="请输入验证码" class="input-container" />
      <a class="login-btn small-btn">获取验证码</a>
    </div>
    <input placeholder="请输入新密码" type="password" class="input-container" />
    <input placeholder="请确认新密码" type="password" class="input-container" />
    <a class="login-btn">注册</a>
    <div class="login-info">点击开始，即表示已阅读并同意
      <a>《平行国服务协议》</a>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="scss">
  @import '../assets/css/enterPages.scss';

</style>