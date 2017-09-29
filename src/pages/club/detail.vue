<template>
  <div v-if="isReady" class="detail-container">
    <header>
      <img :src="schoolexCell.cover" />
      <div class="detail-header-container">
        <h1 class="class-title">{{schoolexCell.detail}}</h1>
        <p class="class-price">会员：消费{{schoolexCell.timecost}}次次数/非会员：{{schoolexCell.price}}元/次</p>
        <p class="class-info">时长：{{schoolexCell.duration}}小时，人数 {{schoolexCell.max_humans}}
        </p>
        <p class="class-info info-bottom">
          <img class="info-icon" :src="schoolexCell.learn.icon" /> {{schoolexCell.learn.detail}}
        </p>
      </div>
    </header>
    <section class="class-content-container">
      <div class="section-title-container">
        <div class="title-container">
          <i class="title-icon"></i> 课程介绍
        </div>
      </div>
      <div class="class-content">
        <div class="section-content">
          <!-- <h1>课程介绍</h1> -->
          <p>{{schoolexCell.detail}}</p>
        </div>
      </div>
    </section>
    <section class="class-list-container">
      <div class="section-title-container">
        <div class="title-container">
          <i class="title-icon"></i> 课程信息
        </div>
      </div>
      <ul class="list-item-container">
        <li v-if="schoolexCell.teacher_ref.length>0" class="class-list-item">
          <div class="list-left">
            <img class="list-icon" src="../../assets/imgs/classDetails/class-list-icon-1.png" />
          </div>
          <div class="list-right">
            <div class="right-title">外教</div>
            <div class="right-info first-list">
              <img class="user-icon" :src="schoolexCell.teacher_ref[0].portrait" />
              <span>{{schoolexCell.teacher_ref[0].first_name}} ({{schoolexCell.teacher_ref[0].nationality.name}})
              </span>
            </div>
          </div>
        </li>
        <li class="class-list-item">
          <div class="list-left">
            <img class="list-icon" src="../../assets/imgs/classDetails/class-list-icon-2.png" />
          </div>
          <div class="list-right">
            <div class="right-title">课程时间</div>
            <div class="right-info">
              <span>{{schoolexCell.enrollment_begin | getClassTimeFormat(schoolexCell.enrollment_begin)}}</span>
            </div>
          </div>
          <div class="list-last">
            <img src="../../assets/imgs/classDetails/class-list-enter-icon.png" />
          </div>
        </li>
        <li class="class-list-item">
          <div class="list-left">
            <img class="list-icon long-icon" src="../../assets/imgs/classDetails/class-list-icon-3.png" />
          </div>
          <div class="list-right">
            <div class="right-title">课程地点</div>
            <div class="right-info">
              <span>{{schoolexCell.classroom.title | addressFilter(schoolexCell.classroom.title)}}</span>
            </div>
          </div>
          <div class="list-last">
            <img src="../../assets/imgs/classDetails/class-list-enter-icon.png" />
          </div>
        </li>
        <!-- <li class="class-list-item">
              <div class="list-left">
                <img class="list-icon" src="../../assets/imgs/classDetails/class-list-icon-4.png" />
              </div>
              <div class="list-right">
                <div class="right-title">服务区域</div>
                <div class="right-info">
                  <span>朝阳区</span>
                </div>
              </div>
              <div class="list-last">
                <img src="../../assets/imgs/classDetails/class-list-enter-icon.png" />
              </div>
            </li>
            <li class="class-list-item">
              <div class="list-left">
                <img class="list-icon" src="../../assets/imgs/classDetails/class-list-icon-5.png" />
              </div>
              <div class="list-right">
                <div class="right-title">服务方式</div>
                <div class="right-info">
                  <span>朝阳区</span>
                </div>
              </div>
              <div class="list-last">
                <img src="../../assets/imgs/classDetails/class-list-enter-icon.png" />
              </div>
            </li> -->
      </ul>
    </section>
    <!-- <section>
          <div class="section-title-container">
            <div class="title-container">
              <i class="title-icon"></i> 关联的Club
            </div>
            <div class="title-container-right">
              查看全部
              <img src="../../assets/imgs/classDetails/class-list-enter-icon.png">
            </div>
          </div>
          <div class="club-list-container">
            <div class="class-item-container">
              <div class="item-container">
                <div class="item-left">
                  <img src='https://ooo.0o0.ooo/2017/04/08/58e8b43ad64b9.png'>
                </div>
                <div class="item-middle">
                  <div class="item-title-container">欧美幼儿俱乐部</div>
                  <div class="item-info-container">
                    时间:&nbsp2017.01.01（周一）10-12点
                  </div>
                  <div class="item-info-container">
                    地点:&nbsp三里屯soho星巴克咖啡厅
                  </div>
                  <div class="item-info-container">
                    外教:&nbspTess
                  </div>
                </div>
                <div class="item-right">
                  <img src="../../assets/imgs/classDetails/class-list-enter-icon.png" />
                </div>
              </div>
            </div>
          </div>
        </section> -->
    <section class="last-section">
      <div class="section-title-container">
        <div class="title-container">
          <i class="title-icon"></i> 评论
        </div>
        <div class="title-container-right">
          查看更多
          <img src="../../assets/imgs/classDetails/class-list-enter-icon.png">
        </div>
      </div>
      <!-- <ul class="evaluate-list-container">
        <li class="evaluate-list-item">
          <div class="list-left">
            <img src="../../assets/imgs/App/img_test.png">
          </div>
          <div class="list-right">
            <div class="list-user-name">
              <span>Anna</span>
              <div class="reply-icon-container">
                <img class="reply-icon" src="../../assets/imgs/classDetails/reply-star-icon.png">
                <img class="reply-icon" src="../../assets/imgs/classDetails/reply-star-icon.png">
                <img class="reply-icon" src="../../assets/imgs/classDetails/reply-star-icon.png">
                <img class="reply-icon" src="../../assets/imgs/classDetails/reply-star-icon.png">
                <img class="reply-icon" src="../../assets/imgs/classDetails/reply-star-icon.png">
              </div>
            </div>
            <div class="list-reply-time">2016-09-09</div>
            <div class="reply-info">此处是评价文字文字评价评价评价</div>
          </div>
        </li>
        <li class="evaluate-list-item">
          <div class="list-left">
            <img src="../../assets/imgs/App/img_test.png">
          </div>
          <div class="list-right">
            <div class="list-user-name">
              <span>Anna</span>
              <div class="reply-icon-container">
                <img class="reply-icon" src="../../assets/imgs/classDetails/reply-star-icon.png">
                <img class="reply-icon" src="../../assets/imgs/classDetails/reply-star-icon.png">
                <img class="reply-icon" src="../../assets/imgs/classDetails/reply-star-icon.png">
                <img class="reply-icon" src="../../assets/imgs/classDetails/reply-star-icon.png">
                <img class="reply-icon" src="../../assets/imgs/classDetails/reply-star-icon.png">
              </div>
            </div>
            <div class="list-reply-time">2016-09-09</div>
            <div class="reply-info">此处是评价文字文字评价评价评价</div>
          </div>
        </li>
      </ul> -->
    </section>
    <footer class="detail-footer-button">
      <a class="footer-main-btn">
        <router-link to="/club">
          <span class="btn-title">立即预定</span>
        </router-link>
        <span class="btn-info">已报名{{schoolexCell.enrollments_count}}人， 还剩{{schoolexCell.max_humans - schoolexCell.enrollments_count}}人</span>
      </a>
    </footer>
    <!-- <footer class="detail-footer-button">
      <a class="icon-btn-one">
        <img src="../../assets/imgs/classDetails/button-icon-1.png">
      </a>
      <a class="icon-btn-two">
        <img src="../../assets/imgs/classDetails/button-icon-2.png">
      </a>
      <a class="footer-main-btn">
        <router-link to="/due">
          <span class="btn-title">立即预定</span>
        </router-link>
        <span class="btn-info">已报名{{schoolexCell.enrollments_count}}人， 还剩{{schoolexCell.max_humans - schoolexCell.enrollments_count}}人</span>
      </a>
    </footer> -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { fmtDate } from '../../utils.js'

export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['schoolexCell', 'isReady']),
  },
  filters: {
    getClassTimeFormat(time) {
      return fmtDate(new Date(Date.parse(time)), 2);
    },
    addressFilter(addr) {
      let site
      Object.keys(addr).forEach((key) => {
          site = addr['zh-hans']
      })
      return site
    }
  },
  methods: {

  },
  created() {
    // this.pkid = this.$route.params.id
    this.$store.dispatch('getSchoolexCellInfo', this.$route.params.id)
  }
}

</script>
<style lang="scss">
@import '../../assets/css/club-detail.scss';
</style>
