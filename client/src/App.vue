<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'


</script>

<template>
  <header>
    <div class="logo-wrapper">
      <img alt="TCR logo" 
        src="https://www.theatrecr.org/wp-content/themes/tcr/images/theatre-cedar-rapids-logo.png?v=1.1.2"  
        height="100" 
      />
    </div>

    <div class="wrapper">
      <h1>TCR Parking and Ordering</h1>
      <p>A platform for reserving preferred lot parking spaces and placing concession orders</p>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/menu">Menu</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo-wrapper {
  background-color: #ffffff;
  padding: 0.5rem;
  margin: 0.5rem 1rem 0.5rem 0;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

header {
  display: flex;
  place-items: flex-start;
  padding-right: calc(var(--section-gap) / 2);
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    /* margin-top: 1rem; */
  }

}
</style>
