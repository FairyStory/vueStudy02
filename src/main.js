import Vue from 'vue'
import App from './App.vue'
import router from './router/router'//引入路由机制
import store from './store/index' //引入vuex

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
