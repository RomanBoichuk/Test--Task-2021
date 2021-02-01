import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showform: false,
    ListsTask: []
  },
  mutations: {
    SHOW_FORM (state) {
      state.showform = !state.showform
    },
    ADD_LISTS (state, payload) {
      state.ListsTask.push(payload)
    }
  },
  actions: {
    showFORM ({ commit }) {
      commit('SHOW_FORM')
    },
    addLISTS ({ commit }, payload) {
      commit('ADD_LISTS', payload)
    }
  },
  modules: {
  }
})
