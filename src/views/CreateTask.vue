<template>
  <main>
    <NavBar />

        <div>
            <aside>
                <ul>
                    <li></li>
                </ul>

                <router-link to="/create-user">Create User</router-link>
            </aside>

            <section>

                <h2>Crear Tarea</h2>

                <form>
                    <label>Nombre de la Tarea</label>
                    <input type="name" placeholder="Nombre de la tarea...">

                    <label>Hora</label>
                    <input type="text" name="hour" placeholder="Hora...">

                    <label>Dia</label>
                    <input type="date" name="date" placeholder="Dia de la tarea...">

                    <label>Repetición</label>
                    <input type="text" name="repetition_frequency" placeholder="Repetición de la tarea...">

                    <label>Consejo</label>
                    <input type="text" name="advice" placeholder="Consejo...">

                    <label>Usuario</label>
                    <input type="text" name="user_id">

                    <button type="submit">Crear</button>
                </form>
            </section>
        </div>
    <NavBarFooterAdmin />
  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import NavBarFooterAdmin from '@/components/NavBarFooterAdmin.vue'

export default {
    name: 'CreateTask',

    components: {
        NavBar,
        NavBarFooterAdmin
    }
}
</script>

<style scoped>
    /* main div {
        display: grid;
        grid-template-columns: 20vw 20vw 20vw 20vw 20vw;
        grid-template-rows: 25vh 25vh 25vh 25vh;       
        width: 100vw;
        height: 100vh;
    }
    
    main div aside {
        margin-top: 5vh;
        background-color: red;
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 4;
        height: 70vh;
    }

    main div section {
        background-color: yellow;
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 2;
        grid-row-end: 4;
        margin-right: 5vh;
    }

    main div section form {
        height: inherit;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    main div section form input {
        width: inherit;
        padding: 4vh 0 0 1vh;
        margin-top: 1vh;
        font-size: 1.5rem;
        border: none;
        border-bottom: 2px solid black;
        background: none;
    }

    main div section form label {
    display: none;
  } */

  main div {
      display: flex;
      justify-content: space-around;
      margin-top: 10vh;
  }

  main div aside {
      margin-top: 10vh;
      display: flex;
      flex-direction: column;
  }

  main div section {
      margin-top: 10vh;
  }

  main div section form {
      display: flex;
      flex-direction: column;
  }
</style>