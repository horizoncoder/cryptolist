<template>
  <div>
      <div class="row">
          <h2  class="col"> {{todo.market_cap_rank}} {{todo.id}} {{todo.current_price}} {{todo.market_cap_change_24h}}</h2>
            <md-button @click="deleteTodo(todo.id)" style="height:30px;width:30px" class="md-fab md-primary">
        <md-icon>❌</md-icon>
        
      </md-button>
    
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
    }
 },

 methods:{
     ...mapActions(['deleteTodo','updateTodo']),
     todoChange(e){
 this.todoTitle = e.target.value
     },
     updateTodoid(todo){
       this.editing = this.editing == true ? false : true;
      if (this.editing) {
        this.todoTitle = todo.title;
        this.updateTodo(todo);
      } else {
        todo.title = this.todoText;
        
      }
     }
 }
}
</script>

<style>

</style>