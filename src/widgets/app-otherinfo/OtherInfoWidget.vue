<template>
  <AppSubstrate class="other-info">
    <div class="other-info__item" v-for="(item, index) in config" :key="index">
      <h3 class="h3 other-info__title">
        {{ item.title }}
      </h3>
      <OtherElementsDecoration :is-tab="false" v-for="(link, index) in item.links" :key="index">
        {{ link }}
      </OtherElementsDecoration>
    </div>
  </AppSubstrate>
</template>
<script setup lang="ts">
import AppSubstrate from '@shared/ui/elements/substrate/AppSubstrate.vue'
import OtherElementsDecoration from '@shared/ui/elements/other/OtherElementsDecoration.vue'

import { config } from '@widgets/app-otherinfo/lib/config'
</script>

<style lang="scss" scoped>
.other-info {
  border-width: var(--border-width-sm);
  border-radius: var(--border-radius-md);
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  &__item {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }

  &__title {
    text-align: center;
  }
}
</style>
