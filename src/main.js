import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'


Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

Vue.config.productionTip = false

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

// router.beforeEach((to, from, next) => {
//   document.title = this.$router.name
//   next()
// })

new Vue({
  router,
  ...App
}).$mount('#app')
