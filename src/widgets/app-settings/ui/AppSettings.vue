<template>
  <div class="settings-page__content">
    <AppSubstrate class="settings-page__substrate">
      <div class="settings-page__colorize settings-colorize">
        <h2 class="settings-colorize__title">Цвет темы</h2>
        <div class="settings-colorize__buttons">
          <component
            v-for="theme in settings_configuration.themes"
            :key="theme.id"
            :id="theme.id"
            class="settings-colorize__btn"
            :class="themesArray.includes(theme.id) ? 'active' : ''"
            :is="theme['main-component']"
            @click="togglerTheme(theme.id)"
          >
            <component :is="theme?.icon" />
          </component>
        </div>
      </div>
    </AppSubstrate>
  </div>
</template>

<script setup lang="ts">
import AppSubstrate from '@/shared/ui/elements/substrate/AppSubstrate.vue'
import { settings_configuration } from '@widgets/app-settings/lib/settings-config'
import { onMounted, ref } from 'vue'
import { useSettingsStore } from '../model/settings-store'
const store = useSettingsStore()

const themesArray = ref<string[]>([])

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') as string
  themesArray.value.push(savedTheme)
})

const togglerTheme = (id: string) => {
  if (themesArray.value.length > 0) {
    themesArray.value = []
    themesArray.value.push(id)
  } else {
    themesArray.value.push(id)
  }

  if (themesArray.value[0]) {
    document.documentElement.classList.remove(store.getTheme)
    store.setCurrentTheme(themesArray.value[0])
    document.documentElement.classList.add(store.getTheme)
  }
}
</script>

<style scoped lang="scss">
.settings-page__content {
  grid-column: 1/-1;
  grid-row: 2 / auto;
  margin-right: 10px;
}

.settings-page__substrate {
  border-radius: var(--border-radius-lg);
  border: var(--border-width-sm) solid var(--color-border-main);
  height: 100%;
  padding: 20px;
}

.settings-colorize {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  &__buttons {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-font-main);
    @include square(44px);
    border: var(--border-width-sm) solid var(--color-border-main);
    border-radius: var(--border-radius-sm);

    &.active {
      border-color: var(--color-accent);
      color: var(--color-accent);
    }

    &:not(.active) {
      @include hover {
        color: var(--color-accent);
        border-color: var(--color-accent);
      }
    }
  }
}
</style>
