import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import IdeaFeedPage from '@pages/IdeaFeedPage.vue'
import AuthPage from '@pages/AuthPage.vue'
import RegistrationPage from '@pages/RegistrationPage.vue'
import NotFoundPage from '@pages/NotFoundPage.vue'
import type { Component } from 'vue'
import AppHeader from '@/widgets/app-header/ui/AppHeader.vue'
import AppAside from '@/widgets/app-aside/ui/AppAside.vue'

declare module 'vue-router' {
  interface RouteMeta {
    layout: string
    title: string
    pageType?: string
    components?: Record<string, Component>
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/not-found',
    name: 'Страница не найдена!',
    component: NotFoundPage,
    meta: {
      layout: 'sign',
      title: 'ITdeas | 404',
    },
  },
  {
    path: '/',
    name: 'Лента идей',
    component: IdeaFeedPage,
    meta: {
      layout: 'main',
      title: 'ITdeas | Лента идей',
      components: {
        header: AppHeader,
        aside: AppAside,
      },
    },
  },
  {
    path: '/auth',
    name: 'Авторизация',
    component: AuthPage,
    meta: {
      layout: 'sign',
      title: 'ITdeas | Авторизация',
      pageType: 'auth',
    },
  },
  {
    path: '/registration',
    name: 'Регистрация',
    component: RegistrationPage,
    meta: {
      layout: 'sign',
      title: 'ITdeas | Регистрация',
      pageType: 'registration',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/not-found',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
  const title: string = to.meta.title

  if (title) {
    document.title = title
  } else {
    document.title = 'ITdeas'
  }

  next()
})

export default router
