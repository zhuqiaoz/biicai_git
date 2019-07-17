const state = {
  count : 0
}

const getters = {
  addEvent(state){
    if(state.count % 2 === 0){
      return state.count
    }else{
      return 0
    }
  }
}

const actions = {
  ressetstate({commit},value){
    commit('rest',value)
  }
}

const mutations = {
  rest(state,value){
    state.count = value
  },
  add(state,value){
    state.count += 1
  },
  less(state,value){
    state.count -= 1
  }
}

export default{
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}