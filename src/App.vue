<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <router-view name="footer"></router-view>
  </footer>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      todos: [
        { id: "t1", name: "Todo 1" },
        { id: "t2", name: "Todo 2" },
        { id: "t3", name: "Todo 3" },
      ]
    };
  },
  // A veces sucede que una parte del estado lo quieres "propagar" o que sea "accesible" desde toda tu aplicación. 
  // provide() {
  //   // return {
  //   //   todos: this.todos
  //   // };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>