<template>
 <main>
    <NavBar />
    <TimeAndPrice />

    <h2>Tareas del dia</h2>

    <section>
      <article v-for="task in items" :key="task.id">
        <h3>{{task.name}}</h3>
        <p>{{task.advice}}</p>
        <P>{{task.description}}</P>
          <div class="checkbox">
            <input type="checkbox" @click="pluspoints" >
          </div>
      </article>
    </section>
    <NavBarFooter />
  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import TimeAndPrice from '@/components/TimeAndPrice.vue'
import NavBarFooter from '@/components/NavBarFooter.vue'

import Taks from '../assets/data/task.json'

export default {
  name: 'Main',
  components: {
    NavBar,
    TimeAndPrice,
    NavBarFooter
  },
   data() {
    return {
      points: 0
    }
  },
    computed: {
    items() {
      return Taks.map((task) => {
        return task
      })
    }
  },
  methods: {
    pluspoints() {
      this.points++;
    }
  }
}
</script>

<style scoped>

  h2 {
    margin-top: 10vh;
    text-align: center;
  }

  section {
    display: flex;
    flex-direction: column;
  }

  section article {
    background-color: var(--first-task-color);
    border: 2px solid black;
    width: 90vw;
    height: 25vh;
    border: none;
    margin: 1vh auto 1vh auto;
  }

</style>