# vue3-vuex-exercise

## Exercise N°9

0. Install all dependencies and the vuex dependency. Execute the program as it is and try to understand the full funcionality; and what are the purpouse of "inject" and "provide" properties. Also, how the custom events are used.

1. Fill the `src/store/index.js` with a global store to handle user `login` state.
Remove the `auth.isUserLogged` property from `App.vue`, use a store getter to check if you user is connected.

2. Remove `inject` from `LoginForm.vue`. Write `login` commit to set `auth.isUserLogged` to **true**. 

4. Remove `inject`from `TheNavigation.vue`. Create or reuse a mutation in store/index.js to perform the **LogOut** functionality.

5. Remove `inject`from `TodoList.vue`. Use a getter for `todo` and `isUserLogged`. Write a commit to perform the `remove todo` functionality.
  
6. Remove `inject` from `AddTodo.vue`. Use the getter `isUserLogged`. Write a commit to perform the `add todo` functionality.
  


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
