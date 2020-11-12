import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: []
  },
  mutations: {
    fetchQuestion (state, result) {
      state.questions = result
    }
  },
  actions: {
    fetchQuestion (context) {
      axios({
        method: 'GET',
        url: 'https://twinword-word-association-quiz.p.rapidapi.com/type1/',
        params: {level: '2', area: 'ms'},
        headers: {
        'x-rapidapi-key': 'ec68316836msh7a43a04bb39aae7p1c2164jsn910dc60d83da',
        'x-rapidapi-host': 'twinword-word-association-quiz.p.rapidapi.com'
        }
      })
      .then(result => {
        context.commit('fetchQuestion', result.quizlist)
      })
    }
  },
  modules: {
  }
})
