import { computed, ref, type Component } from 'vue'
import { steps, type IStep } from './steps'
import type { Router } from 'vue-router'
import type { TFormDataProfile } from '@shared/types/forms/FormData'

export const currentStepId = ref<string>('step1')

export const currentStep = computed<IStep | undefined>(() => {
  return steps.value.find((step) => step.id === currentStepId.value)
})

export const getComponentByStep = (): Component | undefined => {
  const step = steps.value.find((s) => s.id === currentStepId.value)
  return step?.component
}

export const isProfileComplete = (profileData: TFormDataProfile): boolean => {
  return Boolean(profileData.name?.trim()) && Boolean(profileData.lastName?.trim())
}

export const goToStep = (stepId: string, router: Router) => {
  console.dir(stepId, router)

  currentStepId.value = stepId
  console.dir(currentStepId.value)
  router.push(`/profile#${stepId}`)
}

export const markStepCompleted = (stepId: string) => {
  const step = steps.value.find((s) => s.id === stepId)
  if (step) {
    step.completed = true
  }
}

export const goToNext = (router: Router) => {
  const currentIndex = steps.value.findIndex((s) => s.id === currentStepId.value)
  if (currentIndex < steps.value.length - 1) {
    const nextStep = steps.value[currentIndex + 1]

    if (nextStep) {
      console.dir(nextStep.id)
      goToStep(nextStep.id, router)
    }
  }
}

export const handleComplete = () => {}
