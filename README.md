# vue3-vuex-exercise

## About Getters, Mutations and Actions

[State]: tenemos el estado de la aplicación. Esto es, que estructura
tienen los datos. Ejemplo: todos (id, texto), auth (boleano que nos dice
si estamos logueados o no) etc...Por ejemplo en Tender es posible que auth no
sea un simple boleano, si no que sea un objeto con info del tipo

auth: {
   email,
   fullName,
   location,
   ...
}

[Getters]: Obtiene información de nuestro estado. No accedemos directamente
a las variables de estado de la app (aunque podamos!). Por ejemplo, va a 
ser interesante utilizar un getter que nos filtre la lista de animales
en función de nuestra preferencias.

[Mutations]: Operaciones que modifican directamente el estado de la
aplicación. Modifica con métodos, programación, etc. el valor de las 
variables. Por eso es adecuado ponerle nombres que representen lo que
hacen a nivel de modificación de la estructra de los datos. "AddElementToList",
"AddNewAnimalToList"

[Actions]: Son "reglas de negocio" que pueden ejecutar varios 'commits' 
(mutations). Además, son asíncronos,de manera que no bloqueamos al usuario.

## Exercise N°9

0. Install all dependencies and the vuex dependency. Execute the program as it is and try to understand the full funcionality; and what are the purpouse of "inject" and "provide" properties. Also, how the custom events are used.

1. Fill the `src/store/index.js` with a global store to handle user `login` state.
Remove the `auth.isUserLogged` property from `App.vue`, use a store getter to check if you user is connected.

2. Remove `inject` from `LoginForm.vue`. Write `login` commit to set `auth.isUserLogged` to **true**. 

4. Remove `inject`from `TheNavigation.vue`. Create or reuse a mutation in store/index.js to perform the **LogOut** functionality. Also, use the getter properly to properly display or not the Logout button.

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
