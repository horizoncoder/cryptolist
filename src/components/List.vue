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
import Item from './Item.vue'
export default {
components:{
    Item
},
computed:{
    ...mapGetters(['allTodos'])
}
}
</script>

<style>

</style>