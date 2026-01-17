<template>
  <PageContentTitle />
  <AppProfile />
</template>

<script lang="ts" setup>
import { onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PageContentTitle from '@/shared/ui/elements/page-content-title/pageContentTitle.vue'
import AppProfile from '@/widgets/app-profile/ui/AppProfile.vue'
import { isProfileComplete } from '@widgets/app-profile/lib/utilsFunctions'
import { getLocalStorageItemByKey } from '@/shared/utils/localStorageActions'
import type { FormData } from '@/shared/types/forms/FormData'
import { currentStepId, goToStep } from '@widgets/app-profile/lib/utilsFunctions'
import { steps } from '@widgets/app-profile/lib/steps'

const route = useRoute()
const router = useRouter()
const stepRegex = /^step[1-3]$/i

watch(
  () => route.hash,
  (newHash) => {
    const step = newHash.replace('#', '')
    if (!stepRegex.test(step)) {
      router.push('/profile#step1')
      return
    }

    const profileDataLS = getLocalStorageItemByKey<FormData>('formDataPayloads')

    if (profileDataLS) {
      const profileCompleted = isProfileComplete({
        name: profileDataLS.name,
        lastName: profileDataLS.lastName,
      })

      if (profileCompleted) {
        router.push('/profile')
        return
      }
    }

    goToStep(step, router)
  },
)

onMounted(() => {
  initializeStepFromHash()
})

const initializeStepFromHash = () => {
  if (route.hash) {
    const hashStepId = route.hash.replace('#', '')
    const stepExists = steps.value.some((step) => step.id === hashStepId)
    if (stepExists) {
      currentStepId.value = hashStepId
      console.log(`Шаг установлен из URL: ${hashStepId}`)
      return
    }
  }

  const profileDataLS = getLocalStorageItemByKey<FormData>('formDataPayloads')

  if (profileDataLS) {
    const profileCompleted = isProfileComplete({
      name: profileDataLS.name,
      lastName: profileDataLS.lastName,
    })

    if (!profileCompleted) {
      currentStepId.value = 'step1'
      router.push(`/profile#${currentStepId.value}`)
    } else {
      router.push(`/profile`)
    }
  } else {
    currentStepId.value = 'step1'
    router.push(`/profile#${currentStepId.value}`)
  }
}
</script>

<style scoped></style>
