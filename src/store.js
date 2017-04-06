import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    INCREMENT (state) {
      if(state.counter < 3)
        state.counter ++
    },
    DECREASE (state){
      if(state.counter > 0){
        state.counter --
      }
    }
  }
})

export default store