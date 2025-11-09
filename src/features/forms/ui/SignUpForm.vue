<template>
  <app-form class="sign-up-form" @submit="signUp">
    <AppLogo class="form__logo" />
    <h1 class="form__title sign-up-form__title h1">Регистрация в ITdeas</h1>
    <div class="form__field field">
      <label for="email-input" class="form__field-label"> Введите email </label>
      <input
        id="email-input"
        name="email"
        type="email"
        class="form__field-input"
        placeholder=" "
        autocomplete="off"
        maxlength="30"
        minlength="6"
        v-model="form.email"
      />
    </div>
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
    <AppButton class="form__button button-gradient" :disabled="!form.isValid">
      Зарегистрироваться
    </AppButton>
    <div class="form__block">
      <router-link to="/auth" class="form__link form__link-effect"> Есть аккаунт? </router-link>
    </div>
    <div class="form__block">
      <p class="form__text">
        Нажимая на кнопку «Зарегистрироваться» вы принимаете
        <span><a href="#" class="form__link-effect">политику конфиденциальности</a></span>
      </p>
    </div>
  </app-form>
  <AppErrorsBar />
</template>

<script setup lang="ts">
import AppLogo from '@shared/ui/elements/logo/AppLogo.vue'
import AppForm from '@/widgets/app-form/AppForm.vue'
import AppButton from '@shared/ui/elements/button/AppButton.vue'
import type { TFormBase } from '@shared/types/forms/form.ts'
import type { TSignUpForm } from '@shared/types/forms/signUpForm.ts'
import { reactive } from 'vue'
import AppErrorsBar from '@widgets/app-errorsbar/ui/AppErrorsBar.vue'

type TSignUpFormView = TFormBase & TSignUpForm

const form = reactive<TSignUpFormView>({
  password: '',
  login: '',
  email: '',
  isValid: false,
  errors: {},
})

const signUp = (e: Event) => {
  e.preventDefault()
  console.dir(form)
}
</script>
