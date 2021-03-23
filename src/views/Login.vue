<template>
  <main>

    <h1>Acceder</h1>

    <section>
      <form @submit.prevent="login">
        <label>Email</label>
        <input type="email" v-model="user.email" placeholder="Email...">

        <label>Contraseña</label>
        <input type="text" v-model="user.password" placeholder="Contraseña...">

        <button type="submit">Entrar</button>
      </form>
    </section>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',

  data() {
    return {
      user:{
        email: '',
        password: ''
      }
    }
  },

  methods: {

    ...mapActions(['saveUser']),

    login() {
      this.axios.post('https://vast-stream-46882.herokuapp.com/api/login', this.user)
        .then( res => {
          console.log(res)
          const token = res.data.access_token;
          console.log(token)
          this.saveUser(token)
        })

        .catch( e => {
          console.log(e.response)
        })
    }
  }
  
}
</script>

<style>

  h1 {
    margin-top: 25vh;
    text-align: center;
  }

   main section form {
    margin: auto;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

   main section form input {
    width: inherit;
    padding: 4vh 0 0 1vh;
    margin-top: 1vh;
    font-size: 1.5rem;
    border: none;
    border-bottom: 2px solid black;
    background: none;
  }

  main section form input:focus,
  main section form input:focus {
    outline: none;
  }

  main section form label {
    display: none;
  }

  main section form button:nth-child(7),
  main section form button:nth-child(8) {
    margin-top: 1vh;
    padding: 1vh;
  }

  main section:nth-child(2) form button:nth-child(5),
  main section:nth-child(2) form button:nth-child(6) {
    margin-top: 1vh;
    padding: 1vh;
  }


</style>
