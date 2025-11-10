<template>
  <app-form class="sign-up-form" @submit="signUp">
    <AppLogo class="form__logo" />
    <h1 class="form__title sign-up-form__title h1">Регистрация в ITdeas</h1>
    <FormField
      id="email-input"
      label="Введите email"
      type="email"
      v-model="form.email"
      :minlength="4"
    />
    <FormField
      id="login-input"
      label="Введите логин"
      type="text"
      v-model="form.login"
      :maxlength="30"
      :minlength="5"
    />
    <FormField
      id="password-input"
      label="Введите пароль"
      type="password"
      v-model="form.password"
      :maxlength="30"
      :minlength="6"
    />
    <AppButton
      class="form__button button-gradient"
      :disabled="form.password === '' || form.login === '' || form.email === ''"
    >
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
    <ul class="form__errors" v-if="Object.keys(form.errors).length > 0">
      <li class="form__errors-li" v-for="(fieldErrors, fieldName) in form.errors" :key="fieldName">
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
import type { TFormBase } from '@shared/types/forms/form.ts'
import type { TSignUpForm } from '@shared/types/forms/signUpForm.ts'
import { reactive, ref } from 'vue'
import AppErrorsBar from '@widgets/app-errorsbar/ui/AppErrorsBar.vue'
import { useFormValidate } from '@/entities/model/validateForm.ts'
import FormField from '@shared/ui/elements/field/FormField.vue'

type TSignUpFormView = TFormBase & TSignUpForm

const form = reactive<TSignUpFormView>({
  password: '',
  login: '',
  email: '',
  isValid: false,
  errors: {},
})

const formValidateModel = ref(useFormValidate())

const validation = (): void => {
  formValidateModel.value.setLogin(form.login)
  formValidateModel.value.setPassword(form.password)
  formValidateModel.value.setEmail(form.email)
  formValidateModel.value.validationLogin()
  formValidateModel.value.validationPassword()
  formValidateModel.value.validationEmail()

  const errors = formValidateModel.value.getErrors
  if (Object.keys(errors).length > 0) {
    form.errors = errors
    form.isValid = false
    formValidateModel.value.setValid(form.isValid)
  } else {
    form.errors = {}
    form.isValid = true
    formValidateModel.value.setValid(form.isValid)
  }
}

const signUp = (e: Event) => {
  e.preventDefault()
  validation()
  const isValid = formValidateModel.value.getIsValid
  if (isValid) {
    form.password = ''
    form.login = ''
    form.email = ''
    form.errors = {}
    formValidateModel.value.setValid(!isValid)
    formValidateModel.value.clearErrors()
  }
}
</script>
