<template>
  <AppSubstrate class="page-profile">
    <component :is="currentComponent" />
  </AppSubstrate>
</template>

<script lang="ts" setup>
import AppSubstrate from '@/shared/ui/elements/substrate/AppSubstrate.vue'
import { getComponentByStep } from '../lib/utilsFunctions'
import { computed } from 'vue'
const currentComponent = computed(() => getComponentByStep())
</script>

<style lang="scss" scoped>
.page-profile {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1/-1;
  grid-row: 2 / auto;
  margin-right: 10px;
  border-radius: var(--border-radius-lg);
  border: none;
  position: relative;
  background-color: transparent;
  z-index: 1;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    background-color: var(--color-font-main);
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius-lg);
    opacity: 0.25;
    z-index: -1;
  }
}
</style>
