import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '' // 保存token字符串
  },
  getters: {
  },
  mutations: {
    // 保存token
    updateToken (state, val) {
      state.token = val
    }
  },
  actions: {
  },
  modules: {
  },
  // 配置为 vuex 的插件
  // 借助vuex-presistedstate@3.2.1这个包可以让vuex做持久化存储
  plugins: [
    createPersistedState()// 注入持久化插件
  ]
})
