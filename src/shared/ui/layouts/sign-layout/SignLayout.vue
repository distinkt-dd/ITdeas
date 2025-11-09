<template>
  <header class="visually-hidden"></header>
  <main class="main" :class="`main-${page}`">
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
  @include flex-center();
  max-width: 100%;
  width: 100%;
  height: 100vh;
  z-index: 0;
  overflow: hidden;

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

  &:after {
    content: '';
    position: absolute;
    background-color: var(--color-accent);
    border-radius: 50%;
    @include square(1500px);
    filter: blur(150px);
    opacity: 0.2;
    z-index: -1;
    top: -60%;
    left: -40%;
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:before {
    content: '';
    position: absolute;
    background-color: var(--color-default-elipse-fiol);
    border-radius: 50%;
    @include square(1500px);
    filter: blur(150px);
    opacity: 0.2;
    z-index: -1;
    top: -60%;
    right: -40%;
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &-registration {
    &:after {
      left: 100%;
      transform: translateX(-60%);
    }

    &:before {
      right: 100%;
      transform: translateX(60%);
    }
  }

  &-auth {
    &:after {
      left: auto;
      right: 60%;
      transform: translateX(0);
    }

    &:before {
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
