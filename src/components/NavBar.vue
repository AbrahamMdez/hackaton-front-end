<template>
  <nav>
    <ul>
      <li>Logo</li>
      <li>Cerrar Sesión</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  
}
</script>

<style>
  nav {
    background-color: aqua;
    padding: 1vh;
    position: fixed;
    top: 0;
    width: 100vw;
  }

  nav ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>
