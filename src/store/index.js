import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ListsOfTask: [],
    TaskInput: []
  },
  mutations: {
    ADD_LISTSOFTASK (state, payload) {
      state.ListsOfTask.push(payload)
    },
    ADD_NEW_TASK (state, payload) {
      state.TaskInput.push(payload)
    }
  },
  actions: {
    addLISTSOFTASK ({ commit }, payload) {
      commit('ADD_LISTSOFTASK', payload)
    },
    addNEWTASK ({ commit }, payload) {
      commit('ADD_NEW_TASK', payload)
    }
  },
  modules: {
  }
})
