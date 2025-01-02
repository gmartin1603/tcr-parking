<template>
  <Teleport to="body">
    <div class="backdrop">
      <div class="modal">
        <span v-if="showClose" class="close" @click="onClose()">&times;</span>
        <slot></slot>
      </div>
    </div>
</Teleport>
</template>

<script setup>
import { Teleport } from 'vue'

const props = defineProps({
  showClose: {
    type: Boolean,
    default: false
  },
  onClose: {
    type: Function
  }
})
</script>

<style scoped>
  .backdrop {
    user-select: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-background);
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }
</style>