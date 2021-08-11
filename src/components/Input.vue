<template>
  <div>
    <input @change="changeToDo" v-bind:value="todoTitle">
    <md-button @click="addTodoId" style="height:20px;width:20px" class="md-accent">Add</md-button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {v1} from 'uuid'
export default {
  data(){
    return{
      todoTitle:""
    }
  },
methods:{
  ...mapActions(["addTodo"]),
  changeToDo(e){
this.todoTitle=e.target.value;
  },
  addTodoId(){
    this.addTodo({
      id: v1(),
      title:this.todoTitle
    });
    this.todoTitle=""
  }
}
}
</script>

<style>

</style>