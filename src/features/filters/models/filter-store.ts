import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filterData', {
  state: () => ({
    isOpen: false,
  }),
  actions: {
    setIsOpen() {
      this.isOpen = !this.isOpen
    },
  },
})
