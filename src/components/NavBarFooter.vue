<template>
  <footer>
      <ul>
        <router-link to="/"><i class="fas fa-user"></i></router-link>
        <router-link to="/means"><i class="fas fa-comment-medical"></i></router-link>
        <router-link to="/main"><i class="fas fa-tasks"></i></router-link>
        <router-link to="/achievements"><i class="fas fa-gift"></i></router-link>
      </ul>
  </footer>
</template>

<script>
export default {
    name: 'NavBarFooter'

}
</script>

<style>
  footer {
    background-color: var(--primary-color);
    padding: 2vh;
    position: fixed;
    bottom: 0;
    width: 100vw;
  }

  footer ul {
    display: flex;
    justify-content: space-between;
  }

</style>