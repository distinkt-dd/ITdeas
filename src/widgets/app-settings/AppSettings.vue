<template>
  <div class="settings-page__content">
    <AppSubstrate class="settings-page__substrate"> sdf</AppSubstrate>
  </div>
</template>

<script setup lang="ts">
import AppSubstrate from '@/shared/ui/elements/substrate/AppSubstrate.vue'
</script>

<style scoped>
.settings-page__content {
  grid-column: 1/-1;
  grid-row: 2 / auto;
  margin-right: 10px;
}

.settings-page__substrate {
  border-radius: var(--border-radius-lg);
  border: var(--border-width-sm) solid var(--color-border-main);
  height: 100%;
}
</style>
