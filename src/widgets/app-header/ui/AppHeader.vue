<template>
  <header class="header container-app">
    <div class="header__logo-block">
      <router-link to="/" class="header__logo-link">
        <app-logo class="header__logo" />
        <p class="header__logo-text">ITdeas</p>
      </router-link>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  position: relative;
  background-color: red;
  grid-area: header;
}
</style>

<script setup lang="ts">
import AppLogo from '@shared/ui/elements/logo/AppLogo.vue'
</script>
