<template>
  <div class="order-cart-modal full-width">
    <h2>Order Cart</h2>
    <div v-if="cart.length === 0">
      <p>Your cart is empty</p>
    </div>
    <div v-else>
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="NotFound" alt="Item" height="100" width="100" />
        <div class="cart-item-info">
          <h3>{{ item.name }}</h3>
          <p>Price: ${{ item.price }}.00</p>
        </div>
        <div class="item-actions">
          <button id="plus" 
            class="qty-btn"
            @click="updateQty(item, 'plus')"
          > 
            <PlusIcon/> 
          </button> 
          <div class="qty-input">
            <p>{{ item.quantity }}</p>
          </div>
          <button id="minus" 
            class="qty-btn"
            @click="updateQty(item, 'minus')"
          > 
            <MinusIcon/> 
          </button> 
          <button class="remove-btn" @click="removeItem(item)">Remove</button>
        </div>
      </div>
      <div class="cart-actions">
        <button @click="clearCart">Clear Cart</button>
        <button @click="checkout">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import type { CartItem } from '@/types';
import { reactive, ref } from 'vue';
import PlusIcon from './icons/IconPlus.vue';
import MinusIcon from './icons/IconMinus.vue';
import NotFound from '@/assets/imageNotFound.jpg';

const cartStore = useCartStore();
const cart = reactive(cartStore.cart);

function updateQty(item: CartItem, action: 'plus' | 'minus') {
  if (action === 'plus') {
    cartStore.updateQuantity(item.id, item.quantity + 1);
  } else {
    cartStore.updateQuantity(item.id, item.quantity - 1);
  }
}

function removeItem(item: CartItem) {
  cartStore.removeFromCart(item.id);
}

function clearCart() {
  cartStore.clearCart();
}

function checkout() {
  console.log('Checkout');
}


</script>

<style scoped>
.order-cart-modal {
  padding: 1rem;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.cart-item-info {
  flex: 1;
}

.remove-btn {
  height: 30px;
  background-color: var(--color-danger);
  color: white;
  border-radius: 0.5rem;
  margin-left: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.item-actions {
  display: flex;
  align-items: center;
}

.qty-btn {
  height: 30px;
  background-color: var(--color-secondary);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

#plus {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

#minus {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.qty-input {
  width: 40px;
  height: 30px;
  background-color: white;
  color: black;
  font-weight: 900;
  text-align: center;
  border-radius: 0%;
  border: 1px solid var(--color-border);
}
</style>