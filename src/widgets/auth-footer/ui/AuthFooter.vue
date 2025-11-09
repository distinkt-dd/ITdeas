<template>
  <footer class="footer footer-auth">
    <div class="footer-auth__block">
      <a href="#" class="footer-auth__link"> Политика конфиденциальности </a>
      <router-link to="/registration" class="footer-auth__link"> Есть аккаунт? </router-link>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  max-width: 100%;
  width: 100%;

  &-auth {
    padding: 27px 0px;
    background-color: var(--background-elements);
    border-top: var(--border-width-md) solid var(--color-border-main);
    display: flex;
    justify-content: center;
    &__block {
      display: flex;
      align-items: center;
      gap: 30px;
    }

    &__link {
      &:hover {
        color: var(--color-accent);
      }
    }
  }
}
</style>
<script setup lang="ts"></script>
