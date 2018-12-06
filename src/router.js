import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Scheme from './views/Scheme.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/scheme',
      name: 'scheme',
      component: Scheme
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
