<template>
  <header class="header container-app">
    <div class="header__logo-block">
      <router-link to="/" class="header__logo-link">
        <app-logo class="header__logo" />
        <p class="header__logo-text">ITdeas</p>
      </router-link>
    </div>
    <div class="header__management-block">
      <AppButton class="button-square-44">
        <PlusAdderPosts />
      </AppButton>
      <AppButton class="button-square-44" @click="navigator(router, '/favorites')">
        <FavoriteBtnIcon :class="{ 'active-route': linkActiveForButtons(route, '/favorites') }" />
      </AppButton>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  position: relative;
  grid-area: header;
  border-bottom: solid var(--border-width-sm) var(--color-border-main);
  padding-block: 10px;
  max-width: 99%;
  width: 100%;
  height: max-content;

  &__management {
    &-block {
      display: flex;
      align-items: center;
      gap: 20px;
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

const router = useRouter()
const route = useRoute()
</script>
