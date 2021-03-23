import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    user:''
  },
  mutations: {
    getUser(state, payload) {
      if(payload === '') {
        state.user = ''
      }else {
        state.user = payload
      }
    }
  },
  actions: {
    saveUser({commit}, payload) {
      localStorage.setItem('token', payload)
      commit('getUser', payload)
    },

    closeSession({ commit }) {
      commit('getUser', '');
      localStorage.removeItem('token')
    },

    readToken({ commit }) {

      const token = localStorage.getItem('token');
  
      if(token) {
        commit('getUser', token)
      } else {
        commit('getUser', '')
      }
    }
  },
  
  modules: {
  }
})
