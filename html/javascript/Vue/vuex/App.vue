<template>
  <div>
    <h1>App</h1>
    <h2>{{count}}</h2>
    <Butn></Butn>  
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex';
import Butn from './button.vue';
export default {
  components:{
    Butn
  },
  computed:{
    ...mapGetters('man',{
      count : 'counts'
    })
  }
}
</script>

<style>

</style>
