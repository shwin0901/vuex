import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import halloWord from '../components/HelloWorld'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/hw',
    name: 'hw',
    component: halloWord
  },
  {
    path: '/userCenter',
    name: 'userCenter',
    component: () => import('../views/userCenter.vue')
  },
  {
    path: '/video',
    name: 'video1',
    component: () => import('../views/video.vue')
  },
  {
    path: '/index',
    name: 'index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/index.vue')
  },
  {
    path: '*',
    component: () => import('../views/error.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
