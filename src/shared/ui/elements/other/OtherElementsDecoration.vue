<template>
  <Component :is="isTab ? OtherTabElement : OtherLinkWrapper">
    <slot />
  </Component>
</template>

<script setup lang="ts">
import OtherTabElement from '@shared/ui/elements/other/OtherTabElement.vue'
import OtherLinkWrapper from '@shared/ui/elements/other/OtherLinkWrapper.vue'
defineProps<{
  isTab: boolean
}>()
</script>

<style lang="scss">
.other-info__tab,
.other-info__link {
  padding: 10px;
  border-bottom: var(--border-width-sm) var(--color-border-main) solid;
  font-weight: 500;
  font-size: 14px;
  @include hover {
    border-color: var(--color-accent);
  }
}

.other-info__tab {
  transition-duration: var(--transition-duration);
}
</style>
