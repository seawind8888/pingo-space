<template>
  <div class="class-item-container">
      <div class="item-container">
        <div class="item-left">
          <img :src="itemCover"></div>
        <div class="item-middle">
          <div class="item-title-container">{{itemTitle}}</div>
          <div class="item-info-container">
            通用年龄:4-5岁
          </div>
          <div class="item-info-container">
            时&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp间: {{itemTime}}
          </div>
          <div class="item-info-container">
            地&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp点: {{itemAddress}}
          </div>
        </div>
        <div class="item-right">
          <p class="right-info-one">已报名</p>
          <p>10/15</p>
          <div class="portrait-container">
            <img src="../assets/imgs/App/img_test.png">
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    props: ['itemTitle', 'userPortrait', 'itemCover', 'itemTime', 'itemAddress']
  }

</script>
<style lang="scss">
  @import '../assets/css/classItem.scss';

</style>
