import Vue from 'vue'
import Router from 'vue-router'
import MailListView from '@containers/MailListView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MailListView
    }
  ]
})
