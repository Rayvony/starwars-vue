<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'characters'}">Characters</router-link>
    <router-link :to="{ name: 'starships'}">Starships</router-link>
    <router-link :to="{ name: 'planets'}">Planets</router-link>
    <router-link :to="{ name: 'favorites'}">Favorites</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
body{
  background-color: black;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
  margin-right: 20px ;
  text-decoration: none;
}

nav a.router-link-exact-active {
  padding: 10px;
  border-radius: 4px;
  background-color: yellow;
  color: black;
}
</style>
