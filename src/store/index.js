import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showform: false,
    taskMainForm: []
  },
  mutations: {
    SHOW_FORMS (state) {
      state.showform = !state.showform
    },
    SHOW_MAINTASK (state, formtask) {
      state.taskMainForm.push(formtask)
    }
  },
  actions: {
    showAFORMS ({ commit }) {
      commit('SHOW_FORMS')
    },
    showMainTask ({ commit }, formtask) {
      commit('SHOW_MAINTASK', formtask)
    }
  },
  modules: {
  }
})
