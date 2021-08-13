
<template>
<div>
  <div>
    <md-table>
      <md-table-row >
        <md-table-head md-numeric>ID</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Price</md-table-head>
        <md-table-head>Gender</md-table-head>
        <md-table-head>Job Title</md-table-head>
        <md-table-head>Actions</md-table-head>
      </md-table-row>

      <md-table-row v-for="todo in allTodos" :key="todo.id">
        <md-table-cell md-numeric>{{todo.market_cap_rank}}</md-table-cell>
        <md-table-cell>{{todo.id}}</md-table-cell>
        <md-table-cell>{{todo.current_price}}</md-table-cell>
        <md-table-cell>{{todo.market_cap_change_24h}}</md-table-cell>
        <md-table-cell><img width="40px" :src="todo.image"></md-table-cell>
          <md-table-cell> <md-button @click="addCat(todo)" style="height:30px;width:30px" class="md-fab md-primary">
        <md-icon>⬇️</md-icon>
        
      </md-button></md-table-cell>
      </md-table-row>
    </md-table>
  </div>
<h1>favorites</h1>
 <md-table>
      <md-table-row >
        <md-table-head md-numeric>ID</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Price</md-table-head>
        <md-table-head>Gender</md-table-head>
        <md-table-head>Job Title</md-table-head>
        <md-table-head>Actions</md-table-head>
      </md-table-row>

      <md-table-row v-for="(cat) in cats" :key="cat.n">
        <md-table-cell md-numeric>{{cat.market_cap_rank}}</md-table-cell>
        <md-table-cell>{{cat.id}}</md-table-cell>
        <md-table-cell>{{cat.current_price}}</md-table-cell>
        <md-table-cell>{{cat.market_cap_change_24h}}</md-table-cell>
        <md-table-cell><img width="40px" :src="cat.image"></md-table-cell>
          <md-table-cell> <md-button @click="removeCat(n)" style="height:30px;width:30px" class="md-fab md-primary">
        <md-icon>❌</md-icon>
        
      </md-button></md-table-cell>
      </md-table-row>
    </md-table>

   
<!-- <div v-for="todo in allTodos" :key="todo.id">
      <Item :todo='todo'/>
  </div> -->
  
</div>
  
</template>

<script>
import { mapGetters } from 'vuex'
import { mapState } from 'vuex';
// import lodash from 'lodash'
// import Item from './Item.vue'
export default {
    props:{
     todo:{},
 },
    data(){
        return{
               cats:[],
                indx: [],
                newCat:null
        }
    },
 
     name: 'TableBasic',
components:{
    // Item
},
   mounted () {
console.log(this.allTodos)
        this.$store.dispatch('loadItems')
        var one = 'Hello,';
var two = 'how are you?';
var joined = one + " " + two;
console.log(joined)
          if(localStorage.getItem('cats')) {
      try {
        this.cats = JSON.parse(localStorage.getItem('cats'));
      } catch(e) {
        localStorage.removeItem('cats');
      }
    }
    },
computed:{
    ...mapGetters(['allTodos','items']),
    ...mapState([ 'items',"todos"]),
           
},
methods:{
      addCat(todo) {
         console.log(todo)
      this.cats.push(todo);
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