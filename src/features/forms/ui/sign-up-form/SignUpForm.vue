<template>
  <app-form class="sign-up-form" @submit="signUp">
    <AppLogo class="form__logo" />
    <h1 class="form__title sign-up-form__title h1">Регистрация в ITdeas</h1>

    <FormField
      id="email-input"
      label="Введите email"
      type="email"
      v-model="formValidation.formData.email"
      :maxlength="100"
      :errors="formValidation.emailErrors"
      @blur="formValidation.validateEmail()"
      @input="formValidation.validateEmail()"
    />

    <FormField
      id="login-input"
      label="Введите логин"
      type="text"
      v-model="formValidation.formData.login"
      :maxlength="30"
      :minlength="5"
      :errors="formValidation.loginErrors"
      @blur="formValidation.validateLogin()"
      @input="formValidation.validateLogin()"
    />

    <FormField
      id="password-input"
      label="Введите пароль"
      type="password"
      v-model="formValidation.formData.password"
      :maxlength="30"
      :minlength="6"
      :errors="formValidation.passwordErrors"
      @blur="formValidation.validatePassword()"
      @input="formValidation.validatePassword()"
    />

    <AppButton
      class="form__button button-gradient"
      :disabled="!formValidation.isValid || formValidation.isSubmitting"
      type="submit"
    >
      <app-spiner v-if="formValidation.isSubmitting" width="20px" height="20px" />
      <span v-else>Зарегистрироваться</span>
    </AppButton>

    <div class="form__block">
      <router-link to="/auth" class="form__link form__link-effect">Есть аккаунт?</router-link>
    </div>

    <div class="form__block">
      <p class="form__text">
        Нажимая на кнопку «Зарегистрироваться» вы принимаете
        <span><a href="#" class="form__link-effect">политику конфиденциальности</a></span>
      </p>
    </div>

    <ul class="form__errors" v-if="formValidation.hasErrors">
      <li
        class="form__errors-li"
        v-for="(fieldErrors, fieldName) in formValidation.errors"
        :key="fieldName"
      >
        <span v-for="error in Object.values(fieldErrors)" :key="error">
          {{ error }}
        </span>
      </li>
    </ul>
  </app-form>
  <AppErrorsBar :errors-field="['login', 'password', 'email']" />
</template>

<script setup lang="ts">
import AppLogo from '@shared/ui/elements/logo/AppLogo.vue'
import AppForm from '@/widgets/app-form/AppForm.vue'
import AppButton from '@shared/ui/elements/button/AppButton.vue'
import AppErrorsBar from '@/widgets/app-errorsbar/ui/AppErrorsBar.vue'
import { useFormValidate } from '@features/forms'
import FormField from '@shared/ui/elements/field/FormField.vue'
import AppSpiner from '@shared/ui/elements/spinner/ui/AppSpiner.vue'

const formValidation = useFormValidate()

const signUp = (e: Event) => {
  e.preventDefault()
  const isValid = formValidation.validateForm('signUp')

  if (isValid) {
    formValidation.setSubmitting(true)
    console.log('Форма регистрации валидна, данные:', formValidation.getFormData())
  }
}
</script>
