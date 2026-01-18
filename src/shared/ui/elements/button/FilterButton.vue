<template>
  <AppButton class="button filter-button">
    <FilterIcon />
  </AppButton>
</template>

<script lang="ts" setup>
import FilterIcon from '../icons/filter-icon/FilterIcon.vue'
import AppButton from './AppButton.vue'
</script>

<style scoped lang="scss">
.filter-button {
  @include tablet-above {
    display: none;
  }
  grid-column: 3/4;
  grid-row: 1/2;
}
</style>
