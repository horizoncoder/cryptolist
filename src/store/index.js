import Vue from "vue"
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=fals
Vue.use(Vuex)
Vue.use(VueAxios)
export default new Vuex.Store({
    state:{
        items: [],
        todos:[],
       
    },
    getters:{
        allTodos:(state)=>state.todos,
    },
    mutations:{
        add_todo(state,todo){
            state.todos.push(todo);
            console.log(state.todo.id)
        },
        SET_Item (state, todos) {
            state.todos = todos
        },
        delete_todo(state,id){
            state.todos = state.todos.filter((todo) => todo.id != id);
            state.todos = state.todos.filter((todo) => todo.id != console.log(id));
        },
        update_todo(state,todo){
            let index = state.todos.findIndex((t) => t.id == todo.id);
            console.log(index)
            if (index != -1) {
              state.todos[index] = todo;
             }
        },

    },
    actions:{
        loadItems ({ commit }) {
            axios
                .get('https://my-json-server.typicode.com/horizoncoder/cryptojson/posts', {
                })
                .then(response => response.data)
                .then(todos => {
                    this.state.todos=todos
                    console.log(todos);
                commit('SET_Items', todos)
            })
        },
        addTodo({commit},todo){
            commit("add_todo",todo)
        },
        deleteTodo({commit},id){
            commit("delete_todo",id)
        },
        updateTodo({commit},todo){
            commit("update_todo",todo)
        }
    },
    modules:{

    }
})