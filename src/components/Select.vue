.<template>
  <div id="app">
  <h2>favorites</h2>
  <div v-for="(cat,n) in cats" :key="cat.n">
    <p>
    <span class="cat">{{cat}}</span> <button @click="removeCat(n)">Remove</button>
    </p>
  </div>
  
  <p>
    <input v-model="newCat"> 
    <button @click="addCat">Add Cat</button>
  </p>
  
</div>
</template>

<script>
export default {
 data(){
    return{
        todoTitle:"",
         cats:[],
         newCat:null
    }
    
 },
 
  mounted() {
    console.log()
    if(localStorage.getItem('cats')) {
      try {
        this.cats = JSON.parse(localStorage.getItem('cats'));
      } catch(e) {
        localStorage.removeItem('cats');
      }
    }
  },
  methods: {
    addCat() {
      // ensure they actually typed something
      if(!this.newCat) return;
      this.cats.push(this.newCat);
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