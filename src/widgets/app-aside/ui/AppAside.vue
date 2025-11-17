<template>
  <aside class="aside">
    <div class="aside__content-child" v-for="[menuKey, menu] in menuEntries" :key="menuKey">
      <h2 class="aside__title h3" v-if="menuTitles[`${menuKey}Title`]">
        {{ menuTitles[`${menuKey}Title`] }}
      </h2>
      <ul class="aside__menu" :id="menuKey">
        <li class="aside__menu-item" v-for="(item, itemKey) in menu as any" :key="itemKey">
          <AppButton
            class="aside__button"
            :class="{ active: linkActiveForButtons(route, item.route) }"
            v-if="item.title"
            @click="navigator(router, item.route)"
          >
            <Component :is="item.icon" />
            <p class="aside__button-text">
              {{ item.title }}
            </p>
          </AppButton>
          <AppButton class="aside__button" v-else> Ошибка приложения! </AppButton>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.aside {
  --border-list: var(--border-width-sm) solid var(--color-border-main);
  grid-area: aside;
  max-width: 250px;
  background-color: var(--background-elements);
  border-right: var(--border-list);
  display: grid;
  grid-template-rows: auto;
  height: 100dvh;
  gap: 10px;

  &__title {
    text-align: center;
  }

  &__menu {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    font-weight: 600;
  }

  &__content {
    &-child {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      padding-top: 10px;
      &:not(:first-child) {
        border-top: var(--border-list);
      }

      &:last-child {
        display: flex;
        flex-direction: column;
        justify-content: end;
      }
    }
  }

  &__button {
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 100%;
    width: 100%;
    padding: 7px 7px 7px 10px;
    color: var(--color-text-white);
    text-align: left;
    border: solid var(--border-width-sm) var(--color-accent);

    @include hover {
      background-color: var(--color-accent);
    }

    &.active {
      background-color: var(--color-accent);
    }
  }
}
</style>

<script setup lang="ts">
import menuConstructor, { type MenuConstructor } from '@/widgets/app-aside/lib/menu-config.ts'
import { computed } from 'vue'
import AppButton from '@shared/ui/elements/button/AppButton.vue'
import { useRoute, useRouter } from 'vue-router'
import { linkActiveForButtons } from '@shared/utils/linkActiveForButtons.ts'
import { navigator } from '@shared/utils/navigator.ts'
import { menuTitles } from '@/widgets/app-aside/lib/menu-config.ts'

type MenuSection = MenuConstructor[keyof MenuConstructor]

const menuEntries = computed(
  () => Object.entries(menuConstructor) as [keyof MenuConstructor, MenuSection][],
)

const router = useRouter()
const route = useRoute()
</script>
