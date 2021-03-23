<template>
  <main>
    <section>
      <form>
        <label>Name</label>
        <input type="email" placeholder="Nombre...">

        <label>Email</label>
        <input type="text" placeholder="Email...">

        <label>Contraseña</label>
        <input type="text" placeholder="Contraseña...">

        <button type="submit">Registrarse</button>
      </form>
    </section>
    <NavBarFooterAdmin />
  </main>
</template>

<script>
import NavBarFooterAdmin from '@/components/NavBarFooterAdmin.vue'

export default {
    name: 'FormCreateUser',

    components: {
      NavBarFooterAdmin
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

  main section form input:focus {
    outline: none;
  }

  main section form label {
    display: none;
  }

  main section form button:nth-child(7) {
    margin-top: 1vh;
    padding: 1vh;
  }

  main section:nth-child(2) form button:nth-child(5) {
    margin-top: 1vh;
    padding: 1vh;
  }
</style>