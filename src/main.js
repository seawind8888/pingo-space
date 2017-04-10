import Vue from 'vue'
import routes from './router'
import Router from 'vue-router'
import FastClick from 'fastclick'

Vue.config.productionTip = false

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(Router)

const router = new Router({
  routes
})

new Vue({
  router
}).$mount('#app')
