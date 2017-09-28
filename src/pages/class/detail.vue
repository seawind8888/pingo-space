<template>
  <div class="warpper">
    <header class="vip-header-container">
      <div class="vip-header-left">
        <img src="../../assets/imgs/vip-class-detail/detail_icon_success@2x.png">
      </div>
      <div class="vip-header-middle">
        <p><span>选课成功</span></p>
        <p>距离活动开始还有</p>
        <p><span>999</span>天 <span>24</span>小时<span>666</span>分</p>
      </div>
      <div class="vip-header-right">
        <a class="vip-header-button">去预习</a>
      </div>
    </header>
    <section class="vip-class-list-container">
      <ul>
        <li class="vip-list-item">
          <div class="vip-class-left">
            <img class="vip-item-icon" src="../../assets/imgs/vip-class-detail/detail_icon_course@2x.png" />
            <p>课 程</p>
          </div>
          <div class="vip-class-right">
            <div class="vip-class-right-container">
              <p>美国篮球文化节文化节文化节美国篮球文化节文化节</p>
            </div>
            <div class="vip-last-icon-container">
              <img class="enter-icon" src="../../assets/imgs/classDetails/class-list-enter-icon.png" />
            </div>
          </div>
        </li>
        <li class="vip-list-item">
          <div class="vip-class-left">
            <img style="height:15px" class="vip-item-icon" src="../../assets/imgs/vip-class-detail/detail_icon_time@2x.png" />
            <p>时 间</p>
          </div>
          <div class="vip-class-right">
            <div class="vip-class-right-container">
              <p>12月25日14:00-16:00</p>
            </div>
            <div class="vip-last-icon-container">
              <img class="enter-icon" src="../../assets/imgs/classDetails/class-list-enter-icon.png" />
            </div>
          </div>
        </li>
        <li class="vip-list-item">
          <div class="vip-class-left">
            <img style="height:19px" class="vip-item-icon" src="../../assets/imgs/vip-class-detail/detail_icon_location@2x.png" />
            <p>地 点</p>
          </div>
          <div class="vip-class-right">
            <div class="vip-class-right-container">
              <p>东升科技园</p>
            </div>
            <div class="vip-last-icon-container">
              <img class="enter-icon" src="../../assets/imgs/classDetails/class-list-enter-icon.png" />
            </div>
          </div>
        </li>
        <li class="vip-list-item">
          <div class="vip-class-left">
            <img class="vip-item-icon" src="../../assets/imgs/vip-class-detail/detail_icon_teacher@2x.png" />
            <p>外 教</p>
          </div>
          <div class="vip-class-right">
            <div class="vip-class-right-container">
              <div class="right-info-container">
                <img class="right-info-avatar" src="../../assets/imgs/App/img_test.png" />
                <span>Sophie</span>
              </div>
              <div class="right-info-container">
                <img class="right-info-avatar" src="../../assets/imgs/App/img_test.png" />
                <span>Sophie</span>
              </div>
            </div>
          </div>
        </li>
        <li class="vip-list-item">
          <div class="vip-class-left">
            <img class="vip-item-icon" src="../../assets/imgs/vip-class-detail/detail_icon_students@2x.png" />
            <p>学 员</p>
          </div>
          <div class="vip-class-right">
            <div class="vip-class-right-container">
              <div class="student-list-container">
                <div class="student-avatar-container">
                  <img class="right-info-avatar " src="../../assets/imgs/App/img_test.png" />
                </div>
                <div class="student-avatar-container">
                  <img class="right-info-avatar " src="../../assets/imgs/App/img_test.png" />
                </div>
                <div class="student-avatar-container">
                  <img class="right-info-avatar " src="../../assets/imgs/App/img_test.png" />
                </div>
              </div>
              <div class="student-total-info">
                99/99
              </div>
            </div>
            <div class="vip-last-icon-container">
              <img class="enter-icon" src="../../assets/imgs/classDetails/class-list-enter-icon.png" />
            </div>
          </div>
        </li>
        <li class="vip-list-item">
          <div class="vip-class-left">
            <img style="width:13px" class="vip-item-icon" src="../../assets/imgs/vip-class-detail/detail_icon_ta@2x.png" />
            <p>助 教</p>
          </div>
          <div class="vip-class-right">
            <div class="vip-class-right-container assistant-info">
              <div class="right-info-container">
                <img class="right-info-avatar" src="../../assets/imgs/App/img_test.png" />
                <span>Sophie</span>
                <div class="assistant-call-container">
                  <img class="call-img" src="../../assets/imgs/vip-class-detail/detail_icon_phonecall@2x.png"></img>
                </div>
              </div>
              <div class="right-info-container">
                <img class="right-info-avatar" src="../../assets/imgs/App/img_test.png" />
                <span>Sophie</span>
                <div class="assistant-call-container">
                  <img class="call-img" src="../../assets/imgs/vip-class-detail/detail_icon_phonecall@2x.png"></img>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <footer class="vip-footer-btn">
      <span class="btn-title">去评论</span>
      <span class="btn-info">完成后发表一下自己的感受吧~</span>
    </footer>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('getEnrollmentsInfo', this.$route.params.id)
    }
  }

</script>

<style lang="sass" scope>
  @import '../../assets/css/vip-class-detail.scss'

</style>
