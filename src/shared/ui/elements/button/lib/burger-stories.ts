import { defineStore } from 'pinia'

export const useBurgerStore = defineStore('burgerData', {
  state: () => ({
    isOpen: false,
  }),
  getters: {
    getIsOpen: (state) => state.isOpen,
  },
  actions: {
    setIsOpen() {
      this.isOpen = !this.isOpen
    },
  },
})
