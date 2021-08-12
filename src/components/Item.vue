<template>
  <div>
      <div class="row">
          <h2  class="col"> {{todo.market_cap_rank}} {{todo.id}} {{todo.current_price}} {{todo.market_cap_change_24h}}</h2>
            <md-button @click="deleteTodo(todo.id)" style="height:30px;width:30px" class="md-fab md-primary">
        <md-icon>❌</md-icon>
        
      </md-button>
          <md-button @click="deleteTodo(todo.id)" style="height:30px;width:30px" class="md-fab md-primary">
        <md-icon>➡️</md-icon>
        
      </md-button>
    <input v-model="name" type="text">
     <button @click="persist">Save</button>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
 props:{
     todo:{},
 },
 data(){
    return{
        todoTitle:"",
        name:this.todo.id,
    }
    
 },
  mounted() {
    if(localStorage.name) this.name = localStorage.name;
  },

 methods:{
     ...mapActions(['deleteTodo']),
     todoChange(e){
 this.todoTitle = e.target.value
     },
     updateTodoid(todo){
      if (this.editing) {
        this.todoTitle = todo.title;
        this.updateTodo(todo);
      } else {
        todo.title = this.todoText;
        
      }
     },
      persist() {
      localStorage.name = this.name;
      console.log('now pretend I did more stuff...');
    }
     
 }
}
</script>

<style>

</style>