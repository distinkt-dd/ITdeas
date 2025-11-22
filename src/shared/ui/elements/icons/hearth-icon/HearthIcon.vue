<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 3C4.239 3 2 5.216 2 7.95C2 10.157 2.875 15.395 11.488 20.69C11.6423 20.7839 11.8194 20.8335 12 20.8335C12.1806 20.8335 12.3577 20.7839 12.512 20.69C21.126 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3C14.239 3 12 6 12 6C12 6 9.761 3 7 3Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
svg {
  cursor: pointer;
  transition-duration: var(--transition-duration);
  &:hover {
    fill: var(--color-red);
    filter: drop-shadow(0 0 1px var(--color-red)) drop-shadow(0 0 3px var(--color-red))
      drop-shadow(0 0 3px var(--color-red));
    transform: scale(1.1);
    & path {
      stroke: var(--color-red);
    }
  }

  &.active {
    fill: var(--color-red);

    & path {
      stroke: var(--color-red);
    }
  }
}
</style>
