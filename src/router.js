import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const PATHS = {
  home: '/'
}

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: PATHS.home,
      component: () => import('@/layouts/LayoutMain'),
      children: [
        {
          path: '/',
          name: '首页',
          component: () => import('@/views/Home')
        }
      ]
    }
  ]
})
