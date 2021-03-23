<template>
  <main>

    <h1>Acceder</h1>

    <section v-if="!activeSignUpForm">
      <form>
        <label>Email</label>
        <input type="email" placeholder="Email...">

        <label>Contraseña</label>
        <input type="text" placeholder="Contraseña...">

        <button type="submit">Entrar</button>
        <button @click="activeSignUpForm = true">Ir a registrarse</button>
      </form>
    </section>

    <section>
      <form v-if="activeSignUpForm">
        <label>Name</label>
        <input type="email" placeholder="Nombre...">

        <label>Email</label>
        <input type="text" placeholder="Email...">

        <label>Contraseña</label>
        <input type="text" placeholder="Contraseña...">

        <button type="submit">Registrarse</button>
        <button @click="activeSignUpForm = false">Ir a login</button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Login',
  
  data() {
    return {
      activeSignUpForm: false
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
