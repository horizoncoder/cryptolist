import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        todos:[
            {
                id:1,
                title:"One"
            },
            {
                id:2,
                title:"787"
            },
        ],
       
    },
    getters:{
        allTodos:(state)=>state.todos,
    },
    mutations:{
        add_todo(state,todo){
            state.todos.push(todo);
            console.log(state.todo.id)
        },
        delete_todo(state,id){
            state.todos = state.todos.filter((todo) => todo.id != id);
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