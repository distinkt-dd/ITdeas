<template>
  <div class="preloader">
    <div class="circle" :style="`width: ${width}; height: ${height}`"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  width: string
  height: string
}>()
</script>

<style scoped lang="scss">
.preloader {
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle {
  display: block;
  border-radius: 50%;
  border: var(--border-width-md) solid transparent;
  border-top-color: var(--color-accent);
  border-left-color: var(--color-accent);
  max-width: 250px;
  max-height: 250px;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
