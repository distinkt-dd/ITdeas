<template>
  <component :is="layout">
    <template v-for="(component, slotName) in routeComponents" :key="slotName" #[slotName]>
      <component :is="component"></component>
    </template>
  </component>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, type Component } from 'vue'
import MainLayout from '@shared/ui/layouts/main-layout/MainLayout.vue'
import SignLayout from '@shared/ui/layouts/sign-layout/SignLayout.vue'

const route = useRoute()

const layouts: Record<string, Component> = {
  main: MainLayout,
  sign: SignLayout,
}

const layout = computed(() => {
  const layoutName = route.meta.layout || 'main'
  return layouts[layoutName] || layouts['main']
})

const routeComponents = computed(() => {
  return route.meta.components || {}
})
</script>
