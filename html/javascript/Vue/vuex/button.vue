<template>
  <div>
    <button v-for="(item,index) in lists" :key="index" @click="toggle(item)">{{item}}</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex';
export default {
  computed:{
    ...mapGetters('man',{
      lists:'list'
    })
  },
  methods:{
    ...mapActions('man',{
      getstatelist:'getstatelists',
      toggle : 'setstateValue'
    })
  },
  created(){
    this.getstatelist();
  }
}
</script>

<style>

</style>
