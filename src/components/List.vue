<template>
<div>
    <h1>List</h1>
<div v-for="todo in allTodos" :key="todo.id">
      <Item :todo='todo'/>
  </div>
</div>
  
</template>

<script>
import { mapGetters } from 'vuex'
import { mapState } from 'vuex';
import Item from './Item.vue'
export default {
components:{
    Item
},
   mounted () {
        this.$store.dispatch('loadItems')
    },
computed:{
    ...mapGetters(['allTodos','items']),
    ...mapState([ 'items']),
}
}
</script>

<style>

</style>