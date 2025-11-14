<template>
  <section class="not-found">
    <app-substrate class="not-found__substrate">
      <h1 class="not-found__title">
        <span class="not-found__code">404</span>
        <span class="not-found__text"> Страница не найдена! </span>
      </h1>
      <router-link to="/" class="not-found__link"> На главную! </router-link>
    </app-substrate>
  </section>
</template>
>
<script setup lang="ts">
import AppSubstrate from '@shared/ui/elements/substrate/AppSubstrate.vue'
</script>

<style scoped lang="scss">
.not-found {
  height: 100%;
  @include flex-center();
  & span {
    display: block;
    text-align: center;
  }

  &__substrate {
    padding: 30px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    max-width: 700px;
    width: 100%;
  }

  &__code {
    font-size: 98px;
    color: var(--color-accent);
  }

  &__text {
    font-size: 48px;
  }

  &__link {
    font-size: 16px;
    margin: 0 auto;
    max-width: max-content;

    @include hover {
      color: var(--color-accent);
    }
  }
}
</style>
