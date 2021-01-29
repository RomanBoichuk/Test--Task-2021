import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showform: false
  },
  mutations: {
    SHOW_FORMS (state) {
      state.showform = true
    }
  },
  actions: {
    showAFORMS ({ commit }) {
      commit('SHOW_FORMS')
    }
  },
  modules: {
  }
})
