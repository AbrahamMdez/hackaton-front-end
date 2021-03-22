<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Acceder</router-link> |
      <router-link to="/main">Main</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   text-decoration: none;
   list-style: none;
 }
</style>
