<template>
  <footer>
      <ul>
        <router-link to="/means">Recursos</router-link>
        <router-link to="/main">Principal</router-link>
        <router-link to="/achievements">Tareas</router-link>
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