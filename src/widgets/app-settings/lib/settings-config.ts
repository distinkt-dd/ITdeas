import AppButton from '@/shared/ui/elements/button/AppButton.vue'
import ThemeDarkIcon from '@/shared/ui/elements/theme/ui/ThemeDarkIcon.vue'
import ThemeDefaultIcon from '@/shared/ui/elements/theme/ui/ThemeDefaultIcon.vue'
import ThemeLightIcon from '@/shared/ui/elements/theme/ui/ThemeLightIcon.vue'
import { type Component, markRaw, reactive } from 'vue'

interface ISettingsConfigure {
  [key: string]: Array<{
    id: string
    'main-component': Component
    icon?: Component
  }>
}

export const settings_configuration: ISettingsConfigure = reactive({
  themes: [
    {
      id: 'dark-theme',
      'main-component': markRaw(AppButton),
      icon: markRaw(ThemeDarkIcon),
    },
    {
      id: 'light-theme',
      'main-component': markRaw(AppButton),
      icon: markRaw(ThemeLightIcon),
    },
    {
      id: 'default-theme',
      'main-component': markRaw(AppButton),
      icon: markRaw(ThemeDefaultIcon),
    },
  ],
})
