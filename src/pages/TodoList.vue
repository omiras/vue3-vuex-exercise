<template>
  <div v-if="isEmptyList">
    <p>
      You have no todo, please create one.
      <router-link to="/add-todo">Add todo</router-link>
    </p>
  </div>
  <div v-else>
    <todo-item
      v-for="todo in allTodos"
      :key="todo.id"
      :todo="todo"
      @remove-todo="removeTodo"
    ></todo-item>
  </div>
</template>

<script>
import TodoItem from "../components/UI/TodoItem.vue";
export default {
  components: { TodoItem },
  computed: {
    isEmptyList() {
      return this.$store.getters.getAllTodos.length == 0;
    },
    allTodos() {
      return this.$store.getters.getAllTodos;
    },
  },
  methods: {
    removeTodo(id) {
      console.log("Remove id: ", id)
      // TODO remove "todos" from inject and use todo mutation
      this.$store.dispatch('removeTodo', id)
    },
  },
  beforeRouteEnter(to, from, next) {
    next(
      // Comprobamos si el usuario esta logueado o no
      // en BeofreRouterEnter todavia NO está creado el componente.
      // Eso significa que no podemos acceder a "this". Pero claro
      // que todavía necesitamos acceder al estado de la aplicación, por ejemplo, para comprobar si estamos logueados o no; y en consequencia, dar acceso a la petición del usuario de navegar a la URL '/todos'
      (vm) =>
        !vm.$store.getters.isUserLogged && vm.$router.replace({ name: "login" })
    );
  },
};
</script>

<style scoped>
p {
  margin-top: 4rem;
  text-align: center;
}
a {
  margin: auto;
  display: inline-block;
}
</style>
