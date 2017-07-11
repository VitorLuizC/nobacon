import Vue from 'vue'
import Router from 'vue-router'
import views from './views'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: views.Home
    },
    {
      path: '/auth',
      component: views.Auth
    },
    {
      path: '/about',
      component: views.About
    },
    {
      path: '/contact',
      component: views.Contact
    }
  ]
})
