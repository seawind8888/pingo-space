import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'
import store from './vuex'
import * as filters from './filters'


Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  // mode: 'history'
})



//判断过期时间，没过期自动跳
// router.beforeEach((to, from, next) => {
//   let curTime = new Date()
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (window.localStorage.time > curTime) {
//       next({
//         path: '/home'
//       })
//       // router.push('./home')
//     } else {
//       next();
//     }
//   }
// })



Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}


new Vue({
  router,
  store,
  ...App
}).$mount('#app')
