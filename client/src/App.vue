<template>
  <header>
    <div class="logo-wrapper">
      <img alt="TCR logo" 
        src="https://www.theatrecr.org/wp-content/themes/tcr/images/theatre-cedar-rapids-logo.png?v=1.1.2"  
        height="100" 
      />
    </div>

    <div class="content-wrapper">
      <h1>TCR Parking and Ordering</h1>
      <p>A platform for reserving preferred lot parking spaces and placing concession orders</p>

      <div class="nav-wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/menu">Menu</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
        <button class="view-cart" @click="openModal()">Cart <CartIcon/></button>
      </div>
    </div>
  </header>

  <div v-if="cartModalOpen">
      <Modal showClose :onClose="() => closeModal()">
        <h2>Order Cart</h2>
        <p>Order cart content goes here</p>
        <!-- <OrderCart/> -->
      </Modal>
    </div>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CartIcon from './components/icons/IconCart.vue'
import { ref } from 'vue';
import Modal from './components/Modal.vue';

const cartModalOpen = ref(false)

function openModal() {
  cartModalOpen.value = true
}

function closeModal() {
  cartModalOpen.value = false
}


</script>

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

.content-wrapper {
  width: 100%;
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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

.view-cart {
  width: 75px;
  height: fit-content;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
