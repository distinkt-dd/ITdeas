<template>
  <h2 class="h2 page-content__title">{{ pageTitle }}</h2>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const pageTitle: string | undefined = route.meta?.bodyTitle
</script>

<style lang="scss" scoped>
.page-content__title {
  align-self: end;
  grid-column: 1/2;
}
</style>
