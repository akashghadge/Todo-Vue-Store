<template>
  <div id="app">
    <nav>
      <div id="nav">
        <router-link class="nav-item" to="/">Home</router-link>
        <router-link to="/about" class="nav-item">About</router-link>
      </div>
    </nav>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
:root {
  --theme: hsl(277, 63%, 33%);
}
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
