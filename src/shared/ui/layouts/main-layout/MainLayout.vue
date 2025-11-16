<template>
  <div class="layout-main">
    <slot name="header" />
    <slot name="aside" />
    <main class="main container-app">
      <div class="background-elements">
        <div class="bg-element bg-element-1"></div>
        <div class="bg-element bg-element-2"></div>
      </div>
      <router-view :body-title="bodyTitle"></router-view>
    </main>
    <footer class="visually-hidden"></footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const bodyTitle = computed(() => route.meta.bodyTitle as string | undefined)
</script>

<style lang="scss" scoped>
.layout-main {
  display: grid;
  column-gap: 12px;
  row-gap: 20px;
  grid-template-areas:
    'aside header'
    'aside main';
  grid-template-columns: 13% 87%;
  grid-template-rows: auto 1fr;
  height: 100dvh;
  overflow: hidden;
}

.main {
  position: relative;
  grid-area: main;
  min-height: 100%;
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
    position: fixed;
    border-radius: 50%;
    filter: blur(150px);
    opacity: 0.2;
    z-index: -1;

    &-1 {
      display: none;
    }

    &-2 {
      background-color: var(--color-default-elipse-fiol);
      width: 1500px;
      height: 1500px;
      top: 50%;
      left: 55%;
      opacity: 0.25;
    }
  }
}
</style>
