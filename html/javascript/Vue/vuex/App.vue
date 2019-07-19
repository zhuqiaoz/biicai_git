<template>
  <div>
    <h1>这个是APP跟组件</h1>
    <h2>这展示的是statea封装的Vuex数据比如：{{count}}</h2>
    <button @click="reset">reset</button>
    <button @click="add">add</button>
    <button @click="less">less</button>
  </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
  // computed:{
  //   count(){
  //     return this.$store.state.stateA.count;
  //   }
  // },
  computed:mapState({
    // count:(state)=>{state.stateA.count}
    count: state => state.stateA.count
  }),
  methods:mapMutations('stateA',{
    add:'add',
    less : 'less',
    reset : 'resetdata'
  }),
  // methods:mapMutations('stateA',['add','less']),
  // 钩子函数
  created(){
    // this.$store.dispatch('stateA/ressetstate',0);
  }
}
</script>

<style>

</style>
