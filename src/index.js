import Vue from 'vue'
import App from '@components/App'
import store from '@store'

new Vue({
  store,
  el: '[data-app]',
  render: renderize => renderize(App)
})
