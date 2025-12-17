<template>
  <app-substrate class="filters">
    <h3 class="h3 filters__title">Фильтры</h3>
    <div class="filters__content">
      <FilterFeature />
    </div>
  </app-substrate>
</template>

<script setup lang="ts">
import AppSubstrate from '@shared/ui/elements/substrate/AppSubstrate.vue'
import FilterFeature from '@features/filters/ui/filter-app-feed/FilterFeature.vue'
</script>

<style lang="scss" scoped>
.filters {
  border-width: var(--border-width-sm);
  border-radius: var(--border-radius-lg);
  padding: 20px 10px 36px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }

  &__title {
    text-align: center;
  }
}
</style>
