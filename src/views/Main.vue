<template>
 <main>
    <NavBar />
<<<<<<< HEAD
    <header>
      <span>Fecha/Hora</span>
       <div>Tienes: {{ points }} puntos</div>
       
     
    </header>
=======
    <TimeAndPrice />
>>>>>>> 7e2a115ce4901dee830f9175d9c6efcaeab9c962

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
    },
  },
}
</script>

<style>

  h2 {
    margin-top: 10vh;
    text-align: center;
  }

  section {
    display: flex;
    flex-direction: column;
  }

  section article {
    border: 2px solid black;
    width: 90vw;
    height: 25vh;
    margin: 1vh auto 1vh auto;
  }

</style>