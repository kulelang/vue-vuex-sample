import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

const store = new Vuex.Store({

    state:{
        todos:[
            { title : 'Beli Tetek '},
            { title : 'Beli Jus '},
            { title : 'Beli Roti Bakar '},
        ],
    },
    mutations:{
        addTodos(state , todo){
            state.todos.push(todo)
            console.log('Added Using Mutation Add')
        }
    },
    actions:{
        async addTodos({ commit } , todo){
            console.log('Action : Coba nambah todo')
            if(!todo || !todo.title){
                console.error('Invalid Euy')
                return
            }
            const result = await api.addTodos(todo)
            if(result === true ) commit('addTodos',todo)
            else
            console.error('Gabisa Nambah Todo')
        }
    },
    getters:{
        getTodos(state){
            return state.todos
        }   
    }
})

export default store