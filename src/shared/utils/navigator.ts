import { type Router } from 'vue-router'

export const navigator = (router: Router, route: string): void => {
  router.push(route)
}
