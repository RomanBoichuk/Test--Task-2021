import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ListsOfTask: []
  },
  mutations: {
    ADD_LISTSOFTASK (state, payload) {
      state.ListsOfTask.push(payload)
    }
  },
  actions: {
    addLISTSOFTASK ({ commit }, payload) {
      commit('ADD_LISTSOFTASK', payload)
    }
  },
  modules: {
  }
})
