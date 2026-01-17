import { type Router } from 'vue-router'
import { useBurgerStore } from '../ui/elements/button/lib/burger-stories'

export const navigator = (router: Router, route: string): void => {
  const burgerStore = useBurgerStore()
  router.push(route)
  burgerStore.setIsOpen()
}
