<template>
  <AppButton class="button filter-button" @click="togglerIsOpenFilterClick">
    <FilterIcon />
  </AppButton>
</template>

<script lang="ts" setup>
import { useFilterStore } from '@/features/filters/models/filter-store'
import FilterIcon from '../icons/filter-icon/FilterIcon.vue'
import AppButton from './AppButton.vue'
import { onUnmounted } from 'vue'
const filterStore = useFilterStore()

const togglerIsOpenFilterClick = () => {
  filterStore.setIsOpen()
}

onUnmounted(() => {
  filterStore.clearAll()
})
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
