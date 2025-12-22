<template>
  <PageContentTitle />
  <AppSettings />
</template>

<script lang="ts" setup>
import PageContentTitle from '@/shared/ui/elements/page-content-title/pageContentTitle.vue'
import AppSettings from '@/widgets/app-settings/ui/AppSettings.vue'
</script>
<style scoped>
.settings-page__substrate {
  grid-column: 1/-1;
  grid-row: 2 / auto;
  margin-right: 10px;
  border-radius: var(--border-radius-lg);
  border: var(--border-width-sm) solid var(--color-border-main);
}
</style>
