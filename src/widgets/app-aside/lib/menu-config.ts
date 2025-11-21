import { markRaw, reactive } from 'vue'
import type { Component } from 'vue'
import FeedIdeasIcon from '@shared/ui/elements/icons/menu-icons/FeedIdeasIcon.vue'
import MyIdeasIcon from '@shared/ui/elements/icons/menu-icons/MyIdeasIcon.vue'
import FavoritesIcon from '@shared/ui/elements/icons/menu-icons/FavoritesIcon.vue'
import MyVisitsIcon from '@shared/ui/elements/icons/menu-icons/MyVisitsIcon.vue'
import ParametersIcon from '@shared/ui/elements/icons/menu-icons/ParametersIcon.vue'

export interface MenuItem {
  icon: Component
  title: string
  route: string
}

export interface MenuConstructor {
  mainMenu: {
    feedIdeas: MenuItem
    myIdeas: MenuItem
    favoriteIdeas: MenuItem
  }
  historyMenu: {
    myVisitsIdeas: MenuItem
  }
  personalMenu: {
    parametersITdeas: MenuItem
  }
}

export interface titlesMenu {
  mainMenuTitle?: string
  historyMenuTitle?: string
  personalMenuTitle?: string
}

export const menuTitles: titlesMenu = {
  historyMenuTitle: 'История',
}

const menuConstructor = reactive<MenuConstructor>({
  mainMenu: {
    feedIdeas: {
      icon: markRaw(FeedIdeasIcon),
      title: 'Лента идей',
      route: '/',
    },

    myIdeas: {
      icon: markRaw(MyIdeasIcon),
      title: 'Мои идеи',
      route: '/myIdeas',
    },

    favoriteIdeas: {
      icon: markRaw(FavoritesIcon),
      title: 'Избранное',
      route: '/favorites',
    },
  },

  historyMenu: {
    myVisitsIdeas: {
      icon: markRaw(MyVisitsIcon),
      title: 'Мои посещения',
      route: '/myVisits',
    },
  },

  personalMenu: {
    parametersITdeas: {
      icon: markRaw(ParametersIcon),
      title: 'Параметры',
      route: '/appSettings',
    },
  },
})

export default menuConstructor
