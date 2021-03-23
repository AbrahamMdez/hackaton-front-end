<template>
  <main>
    <NavBar />
    <TimeAndPrice />
    <NavBarFooter />
 <h1>Logros</h1>
 <section>
     <article>
          
     </article>
 </section>

  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import TimeAndPrice from '@/components/TimeAndPrice.vue'
import NavBarFooter from '@/components/NavBarFooter.vue'

export default {
  name: 'Achievements',
  components: {
    NavBar,
    TimeAndPrice,
    NavBarFooter
  }
}
</script>
