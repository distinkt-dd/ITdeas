<template>
  <component :is="layout">
    <template v-for="(component, slotName) in routeComponents" :key="slotName" #[slotName]>
      <component :is="component"></component>
    </template>
  </component>
</template>

<script setup lang="ts">
import { useSettingsStore } from '@/widgets/app-settings/model/settings-store'

import MainLayout from '@shared/ui/layouts/main-layout/MainLayout'
import SignLayout from '@shared/ui/layouts/sign-layout/SignLayout'
import { getOrInitLocalStorageItem } from '@/shared/utils/localStorageActions'
import { type FormData } from '@/shared/types/forms/FormData'
import { computed, onMounted, type Component } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useSettingsStore()
const defaultFormData: FormData = {
  login: '',
  email: '',
  password: '',
  name: '',
  lastName: '',
  middleName: '',
}

onMounted(() => {
  store.setDefaultOnMounted()
  const savedTheme = localStorage.getItem('theme') as string

  if (savedTheme) {
    store.setCurrentTheme(savedTheme)
    document.documentElement.classList.add(store.getTheme)
  }

  getOrInitLocalStorageItem<FormData>('formDataPayloads', defaultFormData)
})

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
