<template>
  <header class="visually-hidden"></header>
  <main class="main">
    <router-view> </router-view>
  </main>
  <footer class="visually-hidden"></footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.main {
  &:after {
    display: none;
  }

  &:before {
    top: 15%;
    left: 55%;
    opacity: 0.25;
  }
}
</style>
