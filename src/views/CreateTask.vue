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