<template>
  <!-- main commponent -->
  <div id="app">
    <!-- navigation bar -->
    <nav>
      <div id="nav">
        <router-link class="nav-item" to="/">Home</router-link>
        <router-link to="/quote" class="nav-item">Quote</router-link>
      </div>
    </nav>
    <!-- pages routers -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style>
/* global style */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
/* root varible */
:root {
  --theme: hsl(277, 63%, 33%);
}
/* navbar */
nav {
  padding: 1rem;
  background-color: var(--theme);
}
.nav-item {
  margin-right: 2rem;
  text-decoration: none;
  color: white;
}
.nav-item:hover {
  transform: scale(1.4);
}
</style>
