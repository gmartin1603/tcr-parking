<template>
  <h2>{{ item.name }}</h2>
  <img :src="NotFound"
      height="175"
      width="175"
      alt="Item"
  />
  <div class="item-item">
    <p>{{ item.description }}</p>
    <select v-if="item.variants" class="variants full-width mb-1" v-model="state.selectedVariant">
      <option selected value="">Select a variant</option>
      <option v-for="variant in item.variants" :key="variant.name" class="variant">
        {{ variant.name }}
      </option>
    </select>
  </div>
  <div class="price-and-qty">
    <div class="row">
      <p>Qty: &nbsp;</p> 
      <input type="number" min="1" max="10" v-model="state.qty" />
    </div>
    <p class="item-price">${{ state.totalPrice }}.00</p>
  </div>
  <div class="row between full-width">
    <select name="cup" id="cup-choice" @change="setCupChoice">
      <option value="yes">Sippy Cup ($3)</option>
      <option value="glass">Lounge Glass</option>
      <option value="can">Can</option>
      <option value="refill">Sippy Cup Refill (-$1)</option>
    </select>
    <button class="cart-add"
      :disabled="item.variants && state.selectedVariant === null"
      @click="handleClick()"
    >
      Add to Cart <CartIcon class="ml-05"/>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import NotFound from '../../assets/imageNotFound.jpg'
import CartIcon from '@/components/icons/IconCart.vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  addCup: {
    type: Boolean,
    default: false
  },
  addToCart: {
    type: Function,
    required: true
  }
})

const state = reactive({
  selectedVariant: null,
  qty: 1,
  addCup: props.addCup,
  cupChoice: 'new',

  setCupChoice: (e) => {
    switch (e.target.value) {
      case 'yes':
        state.addCup = true
        state.cupChoice = 'new'
        break
      case 'refill':
        state.addCup = false
        state.cupChoice = 'refill'
        break
      default:
        state.addCup = false
        state.cupChoice = 'default'
    }
  },
  get totalPrice() {
    return state.qty * props.item.price
  }
})

const handleClick = () => {
  const itemToAdd = {
    id: item.id,
    variant: state.selectedVariant,
    qty: state.qty,
    addCup: state.addCup
  }
  console.log('Adding item to cart:', itemToAdd)
}

</script>

<style scoped>
  .item-details {
    max-width: 300px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .price-and-qty {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 1rem 0;
  }

  .item-price {
    font-size: 1rem;
    margin: 0 0 0 0.3rem;
  }
</style>