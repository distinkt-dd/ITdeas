import { defineStore } from 'pinia'

export const useBurgerStore = defineStore('formValidation', {
  state: () => ({
    isOpen: false,
  }),
  actions: {
    setIsOpen() {
      this.isOpen = !this.isOpen
    },
  },
})
