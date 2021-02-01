import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showform: false,
    taskMainForm: []
  },
  mutations: {
    SHOW_FORM (state) {
      state.showform = !state.showform
    },
    SHOW_MAINFORM (state, formtask) {
      state.taskMainForm.push(formtask)
    },
    ADD_NEWFORM (state, payload) {
      state.formtask = payload
    }
  },
  actions: {
    showFORM ({ commit }) {
      commit('SHOW_FORM')
    },
    showMainForm ({ commit }, formtask) {
      commit('SHOW_MAINFORM', formtask)
    },
    addNEWFORM ({ commit }, payload) {
      commit('ADD_NEWFORM', payload)
    }
  },
  modules: {
  }
})
