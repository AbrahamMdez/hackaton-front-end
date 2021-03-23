<template>
  <main>
    <NavBar />
    <TimeAndPrice />

    <h1>Recursos</h1>

    <section>
        <article v-for="main in items" :key ="main.id">
          <h2>{{main.title}}</h2>
          <p>{{main.body}}</p>
        </article>
    </section>
    <NavBarFooter />
  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import TimeAndPrice from '@/components/TimeAndPrice.vue'
import NavBarFooter from '@/components/NavBarFooter.vue'

import Mains from '../assets/data/means.json'

export default {
  name: 'Means',
  components: {
    NavBar,
    TimeAndPrice,
    NavBarFooter
  },

  computed: {
    items() {
      return Mains.map((main) => {
        return main
      })
    }
  }
}
</script>

<style>

  h1 {
    margin-top: 10vh;
    text-align: center;
  }

  main section article {
    border: 2px solid black;
    height: 15vh;
    width: 90vw;
  }

  main section article h2 {
    text-align: center;
    margin-top: 0;
  }

  main section article p {
    text-align: center;
  }
  

</style>