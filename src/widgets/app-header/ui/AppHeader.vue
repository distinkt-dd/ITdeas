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
      <AppButton class="button-square-44">
        <FavoriteBtnIcon />
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
import AppLogo from '@shared/ui/elements/icons/logo/AppLogo.vue'
import AppButton from '@shared/ui/elements/button/AppButton.vue'
import PlusAdderPosts from '@shared/ui/elements/icons/plus-adderposts/PlusAdderPosts.vue'
import FavoriteBtnIcon from '@shared/ui/elements/icons/favorite-btnicon/FavoriteBtnIcon.vue'
</script>
