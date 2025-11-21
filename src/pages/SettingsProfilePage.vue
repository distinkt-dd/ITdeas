<template>
  <h2>{{ pageTitle }}</h2>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const pageTitle: string | undefined = route.meta?.bodyTitle
</script>
<style scoped></style>
