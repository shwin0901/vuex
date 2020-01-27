import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (store.state.userInfo || to.path === '/home') {
    next()
  } else {
    next({
      path: '/home'
    })
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
