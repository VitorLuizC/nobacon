import Vue from 'vue'
import App from './App'
import store from '@store'
import router from './router'
import * as filters from '@lib/filters'

Object.keys(filters).forEach(filter => {
  Vue.filter(filter, filters[filter])
})

const vue = new Vue({
  store,
  router,
  render: h => h(App)
})

vue.$mount('#app')
