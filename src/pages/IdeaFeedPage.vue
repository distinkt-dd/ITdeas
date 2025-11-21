<template>
  <AppContentWidget> </AppContentWidget>
</template>

<script lang="ts" setup>
import AppContentWidget from '@/widgets/app-content/AppContentWidget.vue'
defineProps<{
  bodyTitle: string | undefined
}>()
</script>

<style scoped></style>
