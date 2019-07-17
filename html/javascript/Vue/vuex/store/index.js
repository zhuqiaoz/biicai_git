import Vue from 'vue'
import Vuex from 'vuex'
import stateA from './stateA.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    stateA
  }
})

export default store