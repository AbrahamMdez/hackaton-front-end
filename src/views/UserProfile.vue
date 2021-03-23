<template>
    <main>
        <NavBar />
        <TimeAndPrice />

        <figure>
            <i class="fas fa-user"></i>
        </figure>

        <NavBarFooter />
    </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import TimeAndPrice from '@/components/TimeAndPrice.vue'
import NavBarFooter from '@/components/NavBarFooter.vue'

export default {
  name: 'UserProfile',

  components: {
    NavBar,
    TimeAndPrice,
    NavBarFooter
  },
}
</script>

<style>

    main figure {
        margin: 10vh;
        align-content: center;

    }

    main figure i {
        font-size: 5rem;
        align-self: center;
    }

</style>