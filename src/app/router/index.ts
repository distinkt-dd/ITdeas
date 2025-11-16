import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import IdeaFeedPage from '@pages/IdeaFeedPage.vue'
import AuthPage from '@pages/AuthPage.vue'
import RegistrationPage from '@pages/RegistrationPage.vue'
import NotFoundPage from '@pages/NotFoundPage.vue'
import type { Component } from 'vue'
import AppHeader from '@/widgets/app-header/ui/AppHeader.vue'
import AppAside from '@/widgets/app-aside/ui/AppAside.vue'
import MyIdeasPage from '@pages/MyIdeasPage.vue'
import FavoritesPage from '@pages/FavoritesPage.vue'
import MyVisitsPage from '@pages/MyVisitsPage.vue'
import SettingsProfilePage from '@pages/SettingsProfilePage.vue'

declare module 'vue-router' {
  interface RouteMeta {
    layout: string
    title: string
    pageType?: string
    components?: Record<string, Component>
    bodyTitle?: string | undefined
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/not-found',
    name: 'notFoundPage',
    component: NotFoundPage,
    meta: {
      layout: 'sign',
      title: 'ITdeas | 404',
    },
  },
  {
    path: '/',
    name: 'feedIdeasPage',
    component: IdeaFeedPage,
    meta: {
      layout: 'main',
      title: 'ITdeas | Лента идей',
      components: {
        header: AppHeader,
        aside: AppAside,
      },
      bodyTitle: 'Лента идей',
    },
  },
  {
    path: '/myIdeas',
    name: 'myIdeasPage',
    component: MyIdeasPage,
    meta: {
      layout: 'main',
      title: 'ITdeas | Мои идеи',
      components: {
        header: AppHeader,
        aside: AppAside,
      },
      bodyTitle: 'Мои идеи',
    },
  },
  {
    path: '/favorites',
    name: 'favoritesPage',
    component: FavoritesPage,
    meta: {
      layout: 'main',
      title: 'ITdeas | Избранное',
      components: {
        header: AppHeader,
        aside: AppAside,
      },
      bodyTitle: 'Избранное',
    },
  },
  {
    path: '/myVisits',
    name: 'myVisitsPage',
    component: MyVisitsPage,
    meta: {
      layout: 'main',
      title: 'ITdeas | Мои посещения',
      components: {
        header: AppHeader,
        aside: AppAside,
      },
      bodyTitle: 'Мои посещения',
    },
  },
  {
    path: '/appSettings',
    name: 'appSettings',
    component: SettingsProfilePage,
    meta: {
      layout: 'main',
      title: 'ITdeas | Настройки приложения',
      components: {
        header: AppHeader,
        aside: AppAside,
      },
      bodyTitle: 'Настройки приложения',
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
