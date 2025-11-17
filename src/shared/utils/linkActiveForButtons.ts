import type { RouteLocationNormalized } from 'vue-router'

export const linkActiveForButtons = (
  route: RouteLocationNormalized,
  stringRoute: string,
): boolean => {
  if (route.path === stringRoute) return true
  if (stringRoute !== '/' && route.path.startsWith(stringRoute)) return true
  return false
}
