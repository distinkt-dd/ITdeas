<template>
  <div class="layout-main">
    <slot name="header" />
    <slot name="aside" />
    <main class="main container-app">
      <div class="background-elements">
        <div class="bg-element bg-element-1"></div>
        <div class="bg-element bg-element-2"></div>
      </div>
      <div class="container page-content">
        <router-view></router-view>
      </div>
    </main>
    <footer class="visually-hidden"></footer>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.page-content {
  &:has(.page-addingposts) {
    @include tablet {
      overflow: scroll;
      grid-template-rows: fluid(50, 5) auto;
    }
  }

  &:has(.settings-page__content),
  &:has(.page-profile) {
    @include tablet {
      grid-template-rows: fluid(50, 5) auto;
    }
  }

  &:has(.myvisit__content) {
    @include tablet {
      gap: 0;
    }
  }

  display: grid;

  max-width: 100%;
  width: 100%;
  max-height: 100%;
  height: 100%;
  grid-template-rows: fluid(50, 5) auto;
  gap: 21px 15px;
  padding-bottom: 20px;
  @include tablet {
    padding: 10px;
    column-gap: 0px;
    grid-template-rows: 44px fluid(50, 35) auto;
  }
}

.layout-main {
  display: grid;
  column-gap: 12px;
  row-gap: fluid(20, 10);
  grid-template-areas:
    'aside header'
    'aside main';
  grid-template-columns: 13% auto;
  grid-template-rows: auto 1fr;
  height: 100dvh;
  overflow: hidden;

  @include tablet {
    grid-template-areas:
      'header'
      'main';
    grid-template-columns: 1fr;
  }
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
