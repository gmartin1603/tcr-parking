import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CartItem } from '@/types'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<CartItem[]>([])
  const total = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))
  
  function addItem(item: CartItem) {
    cart.value.push(item)
  }

  function addRange(items: CartItem[]) {
    cart.value.push(...items)
  }

  function removeFromCart(id: number) {
    const index = cart.value.findIndex(item => item.id === id)
    if (index !== -1) {
      cart.value.splice(index, 1)
    }
  }

  function updateQuantity(id: number, quantity: number) {
    const index = cart.value.findIndex(item => item.id === id)
    if (index !== -1) {
      cart.value[index].quantity = quantity
    }
  }

  function clearCart() {
    cart.value = []
  }

  return { cart, total, addItem, addRange, removeFromCart, updateQuantity, clearCart }
})
