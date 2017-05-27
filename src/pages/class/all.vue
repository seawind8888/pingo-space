<template>
  <div class="all-list-container">
    <router-link :to="'detail'" class="class-list-container">
      <class-item item-url="{path: '/detail'}" :item-cover="'https://ooo.0o0.ooo/2017/04/08/58e8b43ad64b9.png'" :item-title="'创意绘画艺术启蒙'"
        :item-time="'2017-03-11 14：00'" :item-address="'北京市朝阳区798尤伦斯达瓦达瓦达瓦大'" :user-portrait="'https://ooo.0o0.ooo/2017/04/08/58e8b3ccc3371.png'"></class-item>
    </router-link>
    <router-link :to="'detail'" class="class-list-container">
      <class-item item-url="{path: '/detail'}" :item-cover="'https://ooo.0o0.ooo/2017/04/08/58e8b43ad64b9.png'" :item-title="'创意绘画艺术启蒙'"
        :item-time="'2017-03-11 14：00'" :item-address="'北京市朝阳区798尤伦斯达瓦达瓦达瓦大'" :user-portrait="'https://ooo.0o0.ooo/2017/04/08/58e8b3ccc3371.png'"></class-item>
    </router-link>
    <router-link :to="'detail'" class="class-list-container">
      <class-item item-url="{path: '/detail'}" :item-cover="'https://ooo.0o0.ooo/2017/04/08/58e8b43ad64b9.png'" :item-title="'创意绘画艺术启蒙'"
        :item-time="'2017-03-11 14：00'" :item-address="'北京市朝阳区798尤伦斯达瓦达瓦达瓦大'" :user-portrait="'https://ooo.0o0.ooo/2017/04/08/58e8b3ccc3371.png'"></class-item>
    </router-link>
    <router-link :to="'detail'" class="class-list-container">
      <class-item item-url="{path: '/detail'}" :item-cover="'https://ooo.0o0.ooo/2017/04/08/58e8b43ad64b9.png'" :item-title="'创意绘画艺术启蒙'"
        :item-time="'2017-03-11 14：00'" :item-address="'北京市朝阳区798尤伦斯达瓦达瓦达瓦大'" :user-portrait="'https://ooo.0o0.ooo/2017/04/08/58e8b3ccc3371.png'"></class-item>
    </router-link>
  </div>
</template>
<script>
  import classItem from '../../components/classItem'
  export default {
    components: {
      classItem
    },
  }

</script>
<style lang="scss">
  @import '../../assets/css/classAll.scss';

</style>
