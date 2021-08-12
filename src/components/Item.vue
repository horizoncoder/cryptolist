<template>
  <div>
      <div class="row">
          <h2  class="col"> {{todo.market_cap_rank}} {{todo.id}} {{todo.current_price}} {{todo.market_cap_change_24h}}</h2>
            <md-button @click="deleteTodo(todo.id)" style="height:30px;width:30px" class="md-fab md-primary">
        <md-icon>❌</md-icon>
        
      </md-button>
          <md-button @click="addCat" style="height:30px;width:30px" class="md-fab md-primary">
        <md-icon>➡️</md-icon>
        
      </md-button>
      </div>
      <div id="app">
  <h2>favorites</h2>
  <div v-for="(cat,n) in cats" :key="cat.n">
    <p>
    <span class="cat">{{cat}}</span> <button @click="removeCat(n)">Remove</button>
    </p>
  </div>
  
  
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
          cats:[],
         newCat:null
    }
    
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
      addCat() {
      // ensure they actually typed something
      this.cats.push(this.todo.id);
      this.newCat = '';
      this.saveCats();
    },
    removeCat(x) {
      this.cats.splice(x,1);
      this.saveCats();
    },
    saveCats() {
      let parsed = JSON.stringify(this.cats);
      localStorage.setItem('cats', parsed);
    }
 }
}
</script>

<style>

</style>