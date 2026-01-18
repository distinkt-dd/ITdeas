<template>
  <app-substrate
    class="filters"
    :class="{
      filters__mobile: isOpen,
      filters__isMobile: isMobileWidget,
    }"
  >
    <h3 class="h3 filters__title">Фильтры</h3>
    <div class="filters__content">
      <FilterFeature />
    </div>
  </app-substrate>
</template>

<script setup lang="ts">
import AppSubstrate from '@shared/ui/elements/substrate/AppSubstrate.vue'
import FilterFeature from '@features/filters/ui/filter-app-feed/FilterFeature.vue'
import { useFilterStore } from '@/features/filters/models/filter-store'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

defineProps<{
  isMobileWidget: boolean
}>()

const filterStore = useFilterStore()
const { isOpen } = storeToRefs(filterStore)
onMounted(() => {
  console.dir(isOpen.value)
})
</script>

<style lang="scss" scoped>
.filters {
  border-width: var(--border-width-sm);
  border-radius: var(--border-radius-lg);
  padding: 20px 10px 36px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  @include tablet {
    display: none;
  }

  &__isMobile {
    @include tablet-above {
      display: none;
    }
  }

  &__mobile {
    display: none;
    @include tablet {
      display: block;
      position: absolute;
      z-index: 10000;
      top: 70px;
      right: 0;
    }
  }

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
