<template>
  <app-form class="sign-in-form" @submit="signIn">
    <AppLogo class="form__logo" />
    <h1 class="form__title sign-in-form__title h1">Войти в ITdeas</h1>
    <div class="form__field field">
      <label for="login-input" class="form__field-label"> Введите логин </label>
      <input
        id="login-input"
        name="login"
        type="text"
        class="form__field-input"
        placeholder=" "
        autocomplete="off"
        maxlength="30"
        minlength="6"
        v-model="form.login"
      />
    </div>
    <div class="form__field field">
      <label for="password-input" class="form__field-label"> Введите пароль </label>
      <input
        id="password-input"
        name="password"
        type="password"
        class="form__field-input"
        placeholder=" "
        autocomplete="off"
        maxlength="30"
        minlength="6"
        v-model="form.password"
      />
    </div>
    <AppButton class="form__button button-gradient"> Войти </AppButton>
    <div class="form__block">
      <a href="#" class="form__link form__link-unknownpass"> Забыли пароль? </a>
    </div>
  </app-form>
</template>

<script lang="ts" setup>
import AppForm from '@/widgets/app-form/AppForm.vue'
import AppLogo from '@shared/ui/elements/logo/AppLogo.vue'
import type { TFormBase } from '@shared/types/forms/form.ts'
import type { TSignInForm } from '@shared/types/forms/signInForm.ts'
import { reactive } from 'vue'
import AppButton from '@shared/ui/elements/button/AppButton.vue'

type TSignInFormView = TFormBase & TSignInForm

const form = reactive<TSignInFormView>({
  password: '',
  login: '',
  isValid: false,
  errors: {},
})

const signIn = (e: Event) => {
  e.preventDefault()
  console.dir(form)
}
</script>

<style lang="scss" scoped></style>
