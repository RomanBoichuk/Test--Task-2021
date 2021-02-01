import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showform: false,
    MainForm: []
  },
  mutations: {
    SHOW_FORM (state) {
      state.showform = !state.showform
    },
    ADD_MAINFORM (state, formtask) {
      state.MainForm.push(formtask)
      console.log(state.MainForm)
    },
    ADD_NEWFORM (state, payload) {
      state.formtask = payload
    }
  },
  actions: {
    showFORM ({ commit }) {
      commit('SHOW_FORM')
    },
    addMainForm ({ commit }, formtask) {
      commit('ADD_MAINFORM', formtask)
    },
    addNEWFORM ({ commit }, payload) {
      commit('ADD_NEWFORM', payload)
    }
  },
  modules: {
  }
})
