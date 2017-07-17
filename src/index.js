import Vue from 'vue'
import App from './App'
import store from '@store'
import router from './router'

Vue.filter('$', function (value) {
  const format = Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  return 'R$' + format.format(value)
})

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
