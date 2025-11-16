<template>
  <h1>{{ bodyTitle }}</h1>
</template>

<script lang="ts" setup>
defineProps<{
  bodyTitle: string | undefined
}>()
</script>

<style scoped></style>
