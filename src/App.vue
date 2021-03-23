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

 :root {
   --primary-color: #9AD3C4;
   --secondary-color: #D7E4EA;
   --first-task-color: #E7C7D7;
   --second-task-color: #C3AAD1;
   --third-task-color: #929FD1;
 }
 
</style>
