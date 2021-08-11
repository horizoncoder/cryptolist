<template>
  <div>
      <div class="row">
          <h2 v-if="!editing" class="col"> {{todo.title}}</h2>
              <input v-else v-bind:value="todoTitle" @change="TodoChange" type="text" class=" col form-control">
               <md-button @click="updateTodoid(todo)"  style="height:30px;width:30px" class="md-fab md-plain">
        {{editing?'✅':'✏️'}}
      </md-button>
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
     todo:{}
 },
 data(){
    return{
        todoTitle:"",
        editing: false
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