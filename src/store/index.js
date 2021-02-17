import { createStore } from 'vuex'

export default createStore({
    state: {
        auth: { isUserLogged: false },
        todos: [
            { id: "t1", name: "Todo 1" },
            { id: "t2", name: "Todo 2" },
            { id: "t3", name: "Todo 3" },
        ]
    },
    // Para mañana 16 Feb: Crear los getters y mutations necesarios para modificar y consultar la lista de todos
    getters: {
        isUserLogged(state) {
            return state.auth.isUserLogged
        },
        getAllTodos(state) {
            return state.todos
        },
    },
    mutations: {
        setLoginStatus(state, payload) {
            state.auth.isUserLogged = payload
        },
        // Explicamos concisamente que cambios vamos a efecutar en la estructura de datos de la aplicación
        removeElementFromList(state, payload) {
            const index = state.todos.findIndex((todo) => todo.id === payload);

            state.todos.splice(index, 1); 
        },

        addElementToList(state, payload) {
            // Crear un elemento fcon el formato de los objetos dentro de 'todos'
            const newId = new Date().toString()
            const newTodo = {
                id: newId,
                name: payload
            }

            state.todos.push(newTodo)
        }

    },

    actions : {
        // Las acciones son asíncronas. Además, las acciones nos permiten ejecutar un conjunto de 'commits' en el orden que creamos más adecuado
        addNewTodo(context, payload) {
            console.log("Action: addNewTodo: ", payload)
            context.commit('addElementToList', payload)
        },

        login(context) {
            context.commit('setLoginStatus', true)
        },

        // Faltan las acciones

        // logout
        logout({commit}) { //using spread operator, same as context.commit
            commit('setLoginStatus', false)
        },

        // removeTodo
        // payload deberías entenderlo como los parámetros/datos/modificaciones/configuración de la petición.
        // En este caso, el 'payload' son los datos que tenemos para modificar el estado de la aplicación.
        // En otros casos, como cuando hacemos un POST; el payload es la información que viaja en el 'body' de la peticion
        removeTodo(context, payload) {
            console.log('Action: removeTodo: ', payload)
            const idTodo = payload
            context.commit('removeElementFromList', idTodo)
        }
    }
})