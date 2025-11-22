<template>
  <div class="skill">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.skill {
  border: var(--border-width-sm) solid var(--color-accent);
  padding: 5px 25px;
  text-transform: uppercase;
  border-radius: var(--border-radius-md);
  font-weight: 600;
}
</style>
