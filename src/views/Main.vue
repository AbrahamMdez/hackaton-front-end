<template>
  <main>
    <NavBar />
    <NavBarFooter />
  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import NavBarFooter from '@/components/NavBarFooter.vue'

export default {
  name: 'Main',
  
  components: {
    NavBar,
    NavBarFooter
  }
}
</script>
