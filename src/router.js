import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@containers/HomeView'),
      meta: {
        title: 'Home'
      },
      children: [
        {
          path: 'product/:id',
          component: () => import('@containers/ProductDetails'),
          meta: {
            title: 'Produto'
          }
        }
      ]
    },
    {
      path: '/mail-list',
      component: () => import('@containers/MailListView')
    }
  ]
})
