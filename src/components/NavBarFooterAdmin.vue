<template>
  <footer>
      <ul>
          <router-link to="/"><i class="fas fa-user"></i></router-link>
          <router-link to="/create-task"><i class="fas fa-tasks"></i></router-link>
      </ul>
  </footer>
</template>

<script>
export default {
    name: 'NavBarFooterAdmin'
}
</script>

<style>
    footer {
    background-color: aqua;
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