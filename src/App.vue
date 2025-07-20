<!-- eslint-disable prettier/prettier -->
<template>
  <div>    
    <Nav />
    <router-view />
    <MyFooter />
  </div>
</template>
<script setup lang="ts">
import Nav from "./components/NavBar.vue";
import MyFooter from "./components/MyFooter.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: rgba(133, 133, 133, 0.904);
}
</style>
