import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [],
    questions: []
  },
  mutations: {
    fetchPlayers (state, result) {
      state.players = result
    },
    fetchQuestions (state, result) {
      state.questions = result
    }
  },
  actions: {
    fetchPlayers (context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/users'
      })
        .then(result => {
          context.commit('fetchPlayers', result)
        })
        .catch(err => {
          console.log(err)
        })
    },

    fetchQuestions (context) {
      axios({
        method: 'GET',
        url: 'https://twinword-word-association-quiz.p.rapidapi.com/type1/',
        params: { level: '2', area: 'ms' },
        headers: {
          'x-rapidapi-key': 'ec68316836msh7a43a04bb39aae7p1c2164jsn910dc60d83da',
          'x-rapidapi-host': 'twinword-word-association-quiz.p.rapidapi.com'
        }
      })
        .then(result => {
          context.commit('fetchQuestion', result.quizlist)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
