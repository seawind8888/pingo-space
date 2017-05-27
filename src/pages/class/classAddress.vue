<template>
  <div class="class-list-container addr-container">
    <ul class="list-item-container">
      <li class="class-list-item">
        <div class="list-left">
          <img class="list-icon" src="../../assets/imgs/classAddr/addr-icon.png" />
        </div>
        <div class="list-right">
          <div class="right-title">北京市朝阳区三里屯SOHO C座22层DayDayUp</div>
          <div class="right-info">
            <span>备注：地铁十号线团结湖站附近</span>
          </div>
        </div>
        <div class="list-last">
          <img src="../../assets/imgs/classDetails/class-list-enter-icon.png" />
        </div>
      </li>
      <li class="class-list-item">
        <div class="list-left">
          <img class="list-icon" src="../../assets/imgs/classAddr/addr-icon.png" />
        </div>
        <div class="list-right">
          <div class="right-title">北京市朝阳区三里屯SOHO C座22层DayDayUp</div>
          <div class="right-info">
            <span>备注：地铁十号线团结湖站附近</span>
          </div>
        </div>
        <div class="list-last">
          <img src="../../assets/imgs/classDetails/class-list-enter-icon.png" />
        </div>
      </li>
    </ul>
    <router-link :to="{ path: '/addrDetail'}">
      <div class="add-addr-btn">
        <img src="../../assets/imgs/classAddr/add-icon.png">添加地址
      </div>
    </router-link>
  </div>
</template>
<script>


</script>
<style lang="scss">
  @import '../../assets/css/classAddress.scss';

</style>
