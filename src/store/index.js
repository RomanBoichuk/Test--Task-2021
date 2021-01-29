import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    autors: [],
    books: []
  },
  mutations: {
    SET_AUTORS (state, payload) {
      state.autors = payload
    },
    ADD_AUTORS (state, payload) {
      state.autors.push(payload)
    },
    REMOVE_AUTORS (state, id) {
      const index = state.autors.findIndex(item => item._id === id)
      state.autors.splice(index, 1)
    },
    SET_BOOKS (state, payload) {
      state.books = payload
    },
    ADD_BOOKS (state, payload) {
      state.books.push(payload)
    },
    REMOVE_BOOKS (state, id) {
      const index = state.books.findIndex(item => item._id === id)
      state.books.splice(index, 1)
    }
  },
  actions: {
    setAUTORS ({ commit }, payload) {
      commit('SET_AUTORS', payload)
    },
    addAUTORS ({ commit }, payload) {
      commit('ADD_AUTORS', payload)
    },
    removeAUTORS ({ commit }, id) {
      commit('REMOVE_AUTORS', id)
    },
    setBOOKS ({ commit }, payload) {
      commit('SET_BOOKS', payload)
    },
    addBOOKS ({ commit }, payload) {
      commit('ADD_BOOKS', payload)
    },
    removeBOOKS ({ commit }, id) {
      commit('REMOVE_BOOKS', id)
    }
  },
  modules: {
  }
})
