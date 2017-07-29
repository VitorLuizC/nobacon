import Vue from 'vue'
import App from './App'
import store from '@store'
import router from './router'

const vue = new Vue({
  store,
  router,
  render: h => h(App)
})

vue.$mount('#app')
