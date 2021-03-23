import { mapActions } from 'vuex';
<template>
  <nav>
    <ul>
      <li>Logo</li>
      <button @click="logout, closeSession()">Cerrar Sesion</button>
    </ul>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NavBar',
  
  methods: {
    ...mapActions(['closeSession', 'readToken']),

    logout() {
    console.log()
    let config = { 
      method: "get",
      url: "https://vast-stream-46882.herokuapp.com/api/logout",
      header: {
        "Accept": 'Application/json',
        "Authorization": "Bearer 16|XuBu9l6IWuzahc8jwUFrbwOA3iz7HNEewR0j6tlh" 
      }
    }
    this.axios(config)
      .then( res => {
        console.log(res)
      })
      .catch ( e => {
        console.log(e)
      })
  },
  },

  created() {
    this.readToken();
  }
}
</script>

<style>

  nav {
    background-color: var(--primary-color);
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


  


