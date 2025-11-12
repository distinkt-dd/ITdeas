<template>
  <header class="visually-hidden"></header>
  <main class="main" :class="`main-${page}`">
    <div class="background-elements">
      <div class="bg-element bg-element-1"></div>
      <div class="bg-element bg-element-2"></div>
    </div>
    <div class="wrapper"></div>
    <router-view></router-view>
  </main>
  <footer class="visually-hidden" v-if="page !== 'auth'"></footer>
  <AuthFooter v-else />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AuthFooter from '@/widgets/auth-footer/ui/AuthFooter.vue'

const route = useRoute()
const page = computed(() => route.meta.pageType as string)
</script>

<style lang="scss">
.main {
  position: relative;
  height: 100vh;
  z-index: 0;
  overflow: hidden;

  .background-elements {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
  }

  .bg-element {
    position: absolute;
    border-radius: 50%;
    width: 1500px;
    height: 1500px;
    filter: blur(150px);
    opacity: 0.2;
    z-index: -1;
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);

    &-1 {
      background-color: var(--color-accent);
      top: -60%;
      left: -40%;
    }

    &-2 {
      background-color: var(--color-default-elipse-fiol);
      top: -60%;
      right: -40%;
    }
  }

  & .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    background: var(--background-white);
    opacity: 0.03;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &-registration {
    .bg-element-1 {
      left: 100%;
      transform: translateX(-60%);
    }

    .bg-element-2 {
      right: 100%;
      transform: translateX(60%);
    }
  }

  &-auth {
    .bg-element-1 {
      left: auto;
      right: 60%;
      transform: translateX(0);
    }

    .bg-element-2 {
      right: auto;
      left: 60%;
      transform: translateX(0);
    }
  }

  &-registration,
  &-auth {
    display: flex;
    gap: 30px;
  }
}
</style>
