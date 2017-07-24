import Vue from 'vue'
import Router from 'vue-router'
import views from './views'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/home',
      component: views.Home
    },
    {
      path: '/product/:id',
      component: views.Product
    }
  ]
})
