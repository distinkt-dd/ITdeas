<template>
  <component :is="layout"></component>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, type Component } from 'vue'
import MainLayout from '@layouts/main-layout/MainLayout.vue'
import SignLayout from '@layouts/sign-layout/SignLayout.vue'

const route = useRoute()

const layouts: Record<string, Component> = {
  main: MainLayout,
  sign: SignLayout,
}

const layout = computed(() => {
  const layoutName = route.meta.layout || 'main'
  return layouts[layoutName] || layouts['main']
})
</script>
