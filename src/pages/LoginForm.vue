<template>
  <section>
    <form @submit.prevent="login">
      <input type="text" placeholder="Login" />
      <input type="text" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </section>
</template>

<script>
export default {
  //inject: ["auth"], // inyectar el objeto o variable 'auth' en este componente. Me lo provee App.vue. A esto también se la llama "inyección de dependencias"; porque este componente pasa a ser dependiente de la configuración/estructura de 'auth'
  methods: {
    login() {

    //this.auth.isUserLogged = true; // Desde este componente estamos modificando el estado de 'auth' para TODA la aplicación; sin necesidad de usar custom events
    this.$store.dispatch('login')
    this.$router.replace({ name: "todos" });
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  width: 100%;
}

form {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin-top: 1.5rem;
}

form > * {
  margin: 0.5rem;
  width: 100%;
  height: 30px;
  border-radius: 5px;
}
</style>