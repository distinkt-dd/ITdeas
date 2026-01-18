<template>
  <div class="skill">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.skill {
  border: var(--border-width-sm) solid var(--color-accent);
  padding: fluid(5, 3) fluid(25, 15);
  text-transform: uppercase;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  @include fluid-text(14, 13);
  @include mobile {
  }
}
</style>
