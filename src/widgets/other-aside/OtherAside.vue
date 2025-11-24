<template>
  <aside class="other-aside">
    <slot />
  </aside>
</template>

<style lang="scss">
.other-aside {
  grid-column: 4/5;
  grid-row: 2 / auto;
}
</style>
