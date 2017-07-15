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
      path: '/login',
      component: views.Login
    },
    {
      path: '/subscribe',
      component: views.Subscribe
    },
    {
      path: '/product/:id',
      component: views.Home
    }
  ]
})
