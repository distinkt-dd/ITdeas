<template>
  <header class="header container-app">
    <div class="header__logo-block">
      <router-link to="/" class="header__logo-link">
        <app-logo class="header__logo" />
        <p class="header__logo-text">ITdeas</p>
      </router-link>
    </div>
    <div class="header__management-block">
      <AppButton class="button-square-44" @click="navigator(router, '/createIdea')">
        <PlusAdderPosts :class="{ 'active-route': linkActiveForButtons(route, '/createIdea') }" />
      </AppButton>
      <AppButton class="button-square-44" @click="navigator(router, '/favorites')">
        <FavoriteBtnIcon :class="{ 'active-route': linkActiveForButtons(route, '/favorites') }" />
      </AppButton>
    </div>
    <AppButton class="button header__burger button-square-44" @click="switchIsOpen" v-if="!isOpen">
      <span></span>
      <span></span>
      <span></span>
    </AppButton>
    <AppButton class="button header__burger button-square-44" @click="switchIsOpen" v-else>
      <svg
        width="44px"
        height="44px"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 20L4 4.00003M20 4L4.00002 20"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </AppButton>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  grid-area: header;
  border-bottom: solid var(--border-width-sm) var(--color-border-main);
  padding-block: 10px;
  max-width: 99%;
  width: 100%;
  height: max-content;

  &__burger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & span {
      display: block;
      width: 100%;
      background-color: var(--color-accent);
      height: 3px;
    }

    @include tablet-above {
      display: none;
    }
  }

  @include tablet {
    padding: 10px;
  }

  &__management {
    &-block {
      display: flex;
      align-items: center;
      gap: 20px;
      @include tablet {
        display: none;
      }
    }
  }

  &__logo {
    color: var(--color-accent);
    &-link {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    &-text {
      font-size: 20px;
      font-weight: 600;
    }
  }
}
</style>

<script setup lang="ts">
import AppLogo from '@shared/ui/elements/icons/logo/AppLogo'
import AppButton from '@shared/ui/elements/button/AppButton'
import PlusAdderPosts from '@shared/ui/elements/icons/plus-adderposts/PlusAdderPosts'
import FavoriteBtnIcon from '@shared/ui/elements/icons/favorite-btnicon/FavoriteBtnIcon'
import { useRoute, useRouter } from 'vue-router'
import { navigator } from '@shared/utils/navigator'
import { linkActiveForButtons } from '@shared/utils/linkActiveForButtons'
import { useBurgerStore } from '@/shared/ui/elements/button/lib/burger-stories'
import { storeToRefs } from 'pinia'

const burgerStore = useBurgerStore()

const { isOpen } = storeToRefs(burgerStore)

const switchIsOpen = () => {
  burgerStore.setIsOpen()
}

const router = useRouter()
const route = useRoute()
</script>
