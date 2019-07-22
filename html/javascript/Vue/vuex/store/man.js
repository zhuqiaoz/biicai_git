const state = {
  num : 0,
  list : []
}

const getters = {
  list   : state => state.list,
  counts : state => state.num
}

const actions = {
  getstatelists({commit},value){
    commit('getlists',value)
  },
  setstateValue({commit},value){
    commit('set'+value+'');
  }
}

const mutations = {
  getlists(state,value){
    state.list = ['reset','add','less']
  },
  setadd(state){
    state.num += 1;
  },
  setless(state){
    state.num -= 1;
  },
  setreset(state){
    state.num = 0;
  }
}

export default{
  namespaced:true,
  state,
  getters,
  actions,
  mutations
}