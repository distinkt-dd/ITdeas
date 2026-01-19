import AddingIdeasPage from '@/pages/AddingIdeasPage.vue'
import FullIdeaCardPage from '@/pages/FullIdeaCardPage.vue'
import AppAside from '@/widgets/app-aside/ui/AppAside.vue'
import AppHeader from '@/widgets/app-header/ui/AppHeader.vue'
import AuthPage from '@pages/AuthPage.vue'
import FavoritesPage from '@pages/FavoritesPage.vue'
import IdeaFeedPage from '@pages/IdeaFeedPage.vue'
import MyIdeasPage from '@pages/MyIdeasPage.vue'
import MyVisitsPage from '@pages/MyVisitsPage.vue'
import NotFoundPage from '@pages/NotFoundPage.vue'
import ProfilePage from '@pages/ProfilePage.vue'
import RegistrationPage from '@pages/RegistrationPage.vue'
import SettingsProfilePage from '@pages/SettingsProfilePage.vue'
import type { Component } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    layout: string
    title: string
    pageType?: string
    components?: Record<string, Component>
    bodyTitle?: string | undefined
    personalName?: string | undefined
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
    path: '/full-card',
    name: 'FullCardDescription',
    component: FullIdeaCardPage,
    meta: {
      layout: 'main',
      title: 'ITdeas | Карточка проекта',
      components: {
        header: AppHeader,
        aside: AppAside,
      },
      bodyTitle: 'Карточка проекта',
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
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
    meta: {
      layout: 'main',
      title: 'ITdeas | Профиль',
      components: {
        header: AppHeader,
        aside: AppAside,
      },
      bodyTitle: 'Профиль',
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
      personalName: 'myIdeasPage',
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
      personalName: 'favoritesPage',
    },
  },
  {
    path: '/myVisits',
    name: 'myVisitsPage',
    component: MyVisitsPage,
    meta: {
      layout: 'main',
      title: 'ITdeas | Последние посещения',
      components: {
        header: AppHeader,
        aside: AppAside,
      },
      bodyTitle: 'Последние посещения',
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
    path: '/createIdea',
    name: 'Create Idea',
    component: AddingIdeasPage,
    meta: {
      layout: 'main',
      title: 'ITdeas | Создание идеи',
      components: {
        header: AppHeader,
        aside: AppAside,
      },
      bodyTitle: 'Создание проекта',
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
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
  },
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
