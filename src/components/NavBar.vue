<template>
<div class="container">
    <input type="radio" name="s" id="home" checked>
    <input type="radio" name="s" id="about">
    <input type="radio" name="s" id="about">
    <nav>
      <div class="slider"></div>
      <label class="home" for="home">
      <i class="fas fa-home"></i>Home
      </label>
      <label class="about" for="about">
       <i class="fas fa-sign-out-alt"></i>Cerrar Sesión
      </label>
    </nav>
  </div>
  <!-- <nav>
    <ul>
      <li>Logo</li>
      <li>Cerrar Sesión</li>
    </ul>
  </nav> -->
</template>

<script>
export default {
  name: 'NavBar',
  
}
</script>

<style scoped>

nav{
  border-radius: 5px;
  display: flex;
  text-align: center;
  position: relative;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
}
nav label{
  width: 100%;
  height: 100%;
  line-height: 60px;
  font-size: 18px;
  font-weight: 400;
  border-radius: 5px;
  margin: 0 5px;
  color: #6895bb;
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: all 0.3s ease;
}
nav label:hover{
background: #6895bb;
}
nav label i{
  margin-right: 4px;
}
nav .slider{
  position: absolute;
  height: 100%;
  width: 20%;
  background: #6895bb;
  left: 0;
  top: 0;
  border-radius: 5px;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 1;
}
#home:checked ~ nav label.home,
#blog:checked ~ nav label.blog,
#code:checked ~ nav label.code,
#help:checked ~ nav label.help,
#about:checked ~ nav label.about{
  color: #fff;
}
#blog:checked ~ nav .slider{
left: 20%;
}
#code:checked ~ nav .slider{
left: 40%;
}
#help:checked ~ nav .slider{
left: 60%;
}
#about:checked ~ nav .slider{
left: 80%;
}
input[type=radio]{
  display: none;
}
  /* nav {
    background-color: aqua;
    padding: 1vh;
    position: fixed;
    top: 0;
    width: 100vw;
  }

  nav ul {
    display: flex;
    justify-content: space-between;
<<<<<<< HEAD
  } */
=======
    align-items: center;
  }
>>>>>>> 7e2a115ce4901dee830f9175d9c6efcaeab9c962

</style>
