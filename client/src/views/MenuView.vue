<template>
  <div class="page">
    <h1>Menu</h1>

    <div class="container">
      <!-- <h2>Menu</h2> -->
      <div class="menu">
        <div v-for="item in menuItems" :key="item.name" class="menu-item">
          <img :src="`/images/${item.image}`"
            height="50"
            alt="Item"
          />
          <div class="item-details">
            <div class="item-title">
              <h3>{{ item.name }}</h3>
              <p>${{ item.price }}.00</p>
            </div>
            <select v-if="item.variants" class="variants">
              <option v-for="variant in item.variants" :key="variant.name" class="variant">
                {{ variant.name }}
              </option>
            </select>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const menuItems = [
  {
    name: 'Adult Signature Drink',
    price: 12,
    image: 'sippy-cup.jpg',
  },
  {
    name: 'Popcorn',
    variants: [
      { name: 'Carmel', image: 'carmel-popcorn.jpg' }, 
      { name: 'Cheese', image: 'cheese-popcorn.jpg' }
    ],
    price: 7,
  },
  {
    name: 'M&Ms',
    variants: [
      { name: 'Peanut', image: 'peanut-mms.jpg' }, 
      { name: 'Plain', image: 'plain-mms.jpg' }
    ],
    price: 4,
  },
  {
    name: '{SHOW_NAME} Button',
    variants: [
      { name: 'Red', image: 'red-button.jpg' }, 
      { name: 'Blue', image: 'blue-button.jpg' }
    ],
    price: 3,
  },
]
</script>

<style>
@media (min-width: 1024px) {
  .container {
    min-height: 100vh;
    width: 100%;
  }

  .menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .menu-item {
    margin: 1rem;
    padding: 1rem;
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    width: 300px;
  }

  .item-details {
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    justify-content: space-between;
    margin-top: 1rem;
  }
  .item-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
}
</style>
