import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// defining routes
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quote',
    name: 'Quote',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Quote.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
