import { defineStore } from 'pinia'

interface ISettigsStore {
  currentTheme: string
}

export const useSettingsStore = defineStore('SettingsStore', {
  state: (): ISettigsStore => ({
    currentTheme: '',
  }),
  getters: {
    getTheme: (state) => state.currentTheme || '',
  },
  actions: {
    setDefaultOnMounted() {
      if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'default-theme')
        this.currentTheme = 'default-theme'
      }
    },

    setCurrentTheme(theme: string) {
      this.currentTheme = theme
      this.setCurrentThemeLocal(theme)
    },

    setCurrentThemeLocal(theme: string) {
      localStorage.setItem('theme', theme)
    },
  },
})
