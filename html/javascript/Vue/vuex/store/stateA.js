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
    commit('restdata',value)
  }
}

const mutations = {
  restdata(state,value){
    typeof(value) == 'number' ? value = value  : value =  0 ;
    state.count = value
  },
  add(state,value){
    typeof(value) == 'number' ? value = value : (parseFloat(value) !== 'number' ? value = 1 : value = parseFloat(value)) ; 
    state.count += 1
  },
  less(state,value){
    typeof(value) == 'number' ? value = value : (parseFloat(value) !== 'number' ? value = 1 : value = parseFloat(value)) ; 
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