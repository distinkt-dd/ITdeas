import { type Component, shallowRef, markRaw } from 'vue'
import FioForm from '@features/forms/ui/fio-form/FioForm.vue'
import UtcForm from '@features/forms/ui/utc-form/UtcForm.vue'
import AvatarForm from '@features/forms/ui/avatar-form/AvatarForm.vue'

export type IStep = {
  id: string
  title: string
  component: Component
  completed: boolean
  validate?: () => boolean
}

// Используем shallowRef вместо ref
export const steps = shallowRef<IStep[]>([
  {
    id: 'step1',
    title: 'Персональные данные',
    component: markRaw(FioForm), // Помечаем компонент как "сырой"
    completed: false,
    validate: () => true,
  },
  {
    id: 'step2',
    title: 'Часовой пояс',
    component: markRaw(UtcForm), // Помечаем компонент как "сырой"
    completed: false,
    validate: () => true,
  },
  {
    id: 'step3',
    title: 'Аватарка',
    component: markRaw(AvatarForm), // Помечаем компонент как "сырой"
    completed: false,
    validate: () => true,
  },
])
