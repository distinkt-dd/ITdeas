<template>
  <aside class="other-aside">
    <slot />
  </aside>
</template>

<style lang="scss">
.other-aside {
  grid-column: 4/5;
  grid-row: 2 / auto;
  display: flex;
  flex-direction: column;
  row-gap: 71px;
  overflow-y: auto;
  padding-right: 3px;

  @include tablet {
    display: none;
  }
}
</style>
