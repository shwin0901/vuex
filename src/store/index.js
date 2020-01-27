import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '普通会员',
    userInfo: '',
    userName: '123'
  },
  mutations: {
    login (state, n) {
      state.userInfo = n
      state.userName = n.user
    },
    pay (state, m) {
      state.user = m
    }
  },
  actions: {
  },
  modules: {
  }
})
