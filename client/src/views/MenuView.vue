<template>
  <div class="page">
    <h1>Menu</h1>

    <div class="container">
      <!-- <h2>Menu</h2> -->
      <div class="menu-tools">
        <button id="add-cup-all" @click="addCupToAll = !addCupToAll">
          Add Sippy Cup to All Drinks | {{ addCupToAll ? '✅' : '❌' }}
        </button>

      </div>
      <div class="menu">
        <div v-for="item in menuItems" 
          :key="item.name"
          :id="item.id"
          class="menu-item"
          @click="(e) => handleClick(e, item)"
        >
          <h3>{{ item.name }}</h3>
          <img :src="NotFound"
            height="175"
            width="175"
            alt="Item"
          />
          <div class="full-width row between mt-1">
            <p class="item-price">${{ item.price }}.00</p>
            <button id="card-btn" class="cart-add w-50" @click="(e) => handleClick(e, item)">Add <CartIcon/></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Add Cup Modal -->
  <div v-if="showCupModal">
    <Modal :onClose="() => handleAddCup(null)">
      <h2>Add Sippy Cup</h2>
      <img :src="NotFound"
          height="175"
          width="175"
          alt="Item"
      />
      <div class="add-cup-info">
        <p>Would you like your drink in a collectable sippy cup for $3?</p>
        <p>The collectable show themed sippy cup is yours to keep and refills are $1 off FOREVER!</p>
        <p>Note: All drinks aside from water must be in a sippy cup to go into the theater.</p>
      </div>
      <div class="add-cup-actions">
        <button id="yes" @click="handleAddCup(true)">Yes</button>
        <button id="no" @click="handleAddCup(false)">No</button>
        <button id="refill" @click="handleAddCup(null)">Refill</button>
      </div>
    </Modal>
  </div>

  <!-- Item Details Modal -->
  <div v-if="showDetails">
    <Modal showClose :onClose="() => showDetails = false">
      <ItemDetailsModal 
        :item="details"
        :addCup="addCupToAll"
        :addToCart="handleAddToCart" 
      />
    </Modal>
  </div>
  
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import Modal from '../components/Modal.vue'
import NotFound from '../assets/imageNotFound.jpg'
import CartIcon from '../components/icons/IconCart.vue'
import ItemDetailsModal from '@/components/MenuView/ItemDetailsModal.vue'

const menuItems = [
  {
    id: 1,
    name: 'Adult Signature Drink',
    description: "Lumiare's Berry Sparkler is a refreshing mix of blackberry liquor, Titos vodka, Amerretto, and Sweet & Sour mix with sprite poured on top. ",
    images: ['sippy-cup.jpg'],
    tags: ['drink', 'alcohol'],
    price: 12,
  },
  {
    id: 2,
    name: "Canned Soda",
    description: "Choose from Coke, Diet Coke, Sprite, or Water",
    variants: [
      { name: 'Coke', image: 'coke.jpg' }, 
      { name: 'Sprite', image: 'sprite.jpg' }
    ],
    images: ['@assets/imageNotFound.jpg'],
    tags: ['drink'],
    price: 3,
  },
  {
    id: 3,
    name: 'Popcorn',
    description: "Choose one (or a few) delicious Almost Famous Popcorn flavors to enjoy during the show.",
    variants: [
      { name: 'Carmel', image: 'carmel-popcorn.jpg' }, 
      { name: 'Cheese', image: '' }
    ],
    image: '@assets/images/CheddarCheesePopcorn.jpg',
    tags: ['snack'],
    price: 7,
  },
  {
    id: 4,
    name: 'M&Ms',
    variants: [
      { name: 'Peanut', image: 'peanut-mms.jpg' }, 
      { name: 'Plain', image: 'plain-mms.jpg' }
    ],
    tags: ['snack'],
    price: 4,
  },
  {
    id: 5,
    name: '{SHOW_NAME} Button',
    variants: [
      { name: 'Red', image: 'red-button.jpg' }, 
      { name: 'Blue', image: 'blue-button.jpg' }
    ],
    tags: ['merch'],
    price: 3,
  },
]

const Constants = {
  Discounts: {
    RefillDiscount: 1,
  },
  Prices: {
    SippyCup: 3
  }
}

const cartStore = useCartStore()
const details = ref(null)

const addCupToAll = ref(false)
const showCupModal = ref(false)

let handleAddCup = null

function handleClick(e, item) {
  console.log(e.target.id)
  if (e.target.id === 'card-btn') {
    handleAddToCart(item)
  } else {
    openDetails(item)
  }
}

async function showAddCupModal() {
  console.log('Show add cup modal')
  return new Promise((resolve) => {
    showCupModal.value = true
    handleAddCup = (addCup) => {
      showCupModal.value = false
      resolve(addCup)
    }
  })
}

async function handleAddToCart(item) {
  let addCup = false

  if (item.tags.includes('drink') && !addCupToAll.value) {
    console.log('Drink item:', item.name)
    addCup = await showAddCupModal()
  } else if (item.tags.includes('drink') && addCupToAll.value) {
    addCup = true
  }

  let cartItems = []
  
  let cartItem = {
      name: item.name,
      price: item.price,
      cup: "default",
      quantity: 1,
    }

  if (addCup) {
    cartItems.push({
      name: 'Sippy Cup',
      price: Constants.Prices.SippyCup,
      drinkId: item.id
    })
    item.cup = "new"
  } else if (addCup === null) {
    cartItem.price = cartItem.price - Constants.Discounts.RefillDiscount
    cartItem.cup = "refill"
  }

  cartItems.push(cartItem)

  console.log('Cart item:', cartItems)
  cartStore.addRange(cartItems)

  showDetails.value = false
}

const showDetails = ref(false)

function openDetails(item) {
  console.log('Open details:', item)
  showDetails.value = true
  details.value = item
}

</script>

<style>
@media (min-width: 1024px) {
  .container {
    user-select: none;
    min-height: 100vh;
    width: 100%;
  }

  .menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .menu-tools {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    #add-cup-all {
      background-color: var(--color-secondary);
      color: white;
      border: none;
      border-radius: 0.5rem;
      padding: 0.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }
  }

  .menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    width: 220px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .menu-item:hover {
    box-shadow: 0 0 10px 0 rgba(240, 238, 238, 0.1);
    transform: scale(1.05);
  }

  @media screen and (max-width: 1024px) {
    .menu-item {
      width: 100%;
    }
    
  }

  .cart-add {
    background-color: var(--color-primary);
    color: white;
    border: none;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .add-cup-info {
    margin-top: 1rem;
    max-width: 300px;
  }

  .add-cup-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    #yes, #no, #refill {
      width: 30%;
      padding: 0.5rem;
      border: 1px solid var(--color-border);
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    #yes {
      background-color: var(--color-success);
      color: white;
    }

    #no {
      background-color: var(--color-danger);
      color: white;
    }

    #refill {
      background-color: var(--color-primary);
      color: white;
    }
  }

}
</style>
