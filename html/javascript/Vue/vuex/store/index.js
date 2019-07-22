import Vue from 'vue';
import Vuex from 'vuex';

import man from './man.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    man
  }
})

export default store;