<template>
  <div class="class-item-container">
    <div class="item-container">
      <div class="item-left">
        <img :src="itemCover?itemCover:'https://i.loli.net/2017/09/29/59cdf20da6647.png'">
      </div>
      <div class="item-middle">
        <div class="item-title-container">{{itemTitle}}</div>
        <div class="item-info-container">
          通用年龄: {{itemAgeMin}}-{{itemAgeMax}}岁
        </div>
        <div class="item-info-container">
          时&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp间: {{itemTime}}
        </div>
        <div class="item-info-container">
          地&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp点: {{itemAddress}}
        </div>
      </div>
      <div class="item-right">
        <p class="right-info-one">{{ itemStatus | enrollmentsStatus(itemStatus) }}</p>
        <p>{{itemEnrollmentsCount}}/{{itemMaxHumans}}</p>
        <div v-if="userPortrait.length>0" class="portrait-container">
          <!-- <img src="../assets/imgs/App/img_test.png"> -->
          <img :src="userPortrait[0].cover">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['itemTitle', 'userPortrait', 'itemCover', 'itemTime', 'itemAddress', 'itemAge', 'itemAgeMin', 'itemAgeMax', 'itemStatus', 'itemEnrollmentsCount', 'itemMaxHumans'],
  filters: {
    enrollmentsStatus(status) {
      switch (status) {
        case 1:
          return '报名待开启'
          break;
        case 2:
          return '报名已结束'
          break;
        case 4:
          return '待评论'
          break;
        case 5:
          return '上课中'
          break;
      }
    }
  }
}

</script>
<style lang="scss">
@import '../assets/css/class-item.scss';
</style>
