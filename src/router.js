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
      path: '/v-if',
      name: 'v-if',
      component: () => import('./views/If.vue')
    },
    {
      path: '/v-model',
      name: 'v-model',
      component: () => import('./views/Model.vue'),
      props: { some: false }
    }
  ]
})
