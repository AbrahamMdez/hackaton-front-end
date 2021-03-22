<template>
  <main>
    <NavBar />
    <header>
      <span>Fecha/Hora</span>
      <button>Tus puntos</button>
    </header>

    <h2>Tareas del dia</h2>

    <section>
      <article v-for="task in items" :key="task.id">
        <h3>{{task.name}}</h3>
        <P>{{task.description}}</P>

        <i class="fas fa-check-circle"></i>
      </article>
    </section>
    <NavBarFooter />
  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import NavBarFooter from '@/components/NavBarFooter.vue'
import Taks from '../assets/data/task.json'

export default {
  name: 'Main',
  
  components: {
    NavBar,
    NavBarFooter
  },

  computed: {
    items() {
      return Taks.map((task) => {
        return task
      })
    }
  }
}
</script>

<style>
  header {
    background-color: aquamarine;
    margin-top: 5vh;
    padding: 2vh;
    display: flex;
    justify-content: space-between;
  }

  h2 {
    text-align: center;
  }

  section article {
    border: 2px solid black;
    padding: 15vh;
  }

</style>