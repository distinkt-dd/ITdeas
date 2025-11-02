import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import IdeaFeedPage from '@/pages/IdeaFeedPage.vue'

declare module 'vue-router' {
  interface RouteMeta {
    layout: string,
    title: string,
  }
}


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Лента идей',
    component: IdeaFeedPage,
    meta: {
      layout: 'main',
      title: 'ITdeas | Лента идей'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
  const title: string = to.meta.title

  if(title) {
    document.title = title
  } else {
    document.title = 'ITdeas'
  }

  next()
})

export default router;
