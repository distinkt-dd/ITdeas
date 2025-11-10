<template>
  <app-form class="sign-in-form" @submit="signIn">
    <AppLogo class="form__logo" />
    <h1 class="form__title sign-in-form__title h1">Войти в ITdeas</h1>
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
      :disabled="form.password === '' || form.login === ''"
    >
      <app-spiner v-if="form.isValid" width="20px" height="20px" />
      <span v-else>Войти</span>
    </AppButton>
    <div class="form__block">
      <a href="#" class="form__link form__link-effect"> Забыли пароль? </a>
    </div>
    <ul class="form__errors" v-if="Object.keys(form.errors).length > 0">
      <li class="form__errors-li" v-for="(fieldErrors, fieldName) in form.errors" :key="fieldName">
        <span v-for="error in Object.values(fieldErrors)" :key="error">
          {{ error }}
        </span>
      </li>
    </ul>
  </app-form>
  <AppErrorsBar :errorsField="['password', 'login']" />
</template>

<script lang="ts" setup>
import AppForm from '@/widgets/app-form/AppForm.vue'
import AppLogo from '@shared/ui/elements/logo/AppLogo.vue'
import type { TSignInForm } from '@shared/types/forms/signInForm.ts'
import { reactive, ref } from 'vue'
import AppButton from '@shared/ui/elements/button/AppButton.vue'
import AppErrorsBar from '@/widgets/app-errorsbar/ui/AppErrorsBar.vue'
import { useFormValidate } from '@entities/model/validateForm.ts'
import type { TFormBase } from '@shared/types/forms/form.ts'
import FormField from '@shared/ui/elements/field/FormField.vue'
import AppSpiner from '@shared/ui/elements/spinner/ui/AppSpiner.vue'

type TSignInFormView = TSignInForm & TFormBase

const form = reactive<TSignInFormView>({
  password: '',
  login: '',
  isValid: false,
  errors: {},
})

const formValidateModel = ref(useFormValidate())

const validation = (): void => {
  formValidateModel.value.setLogin(form.login)
  formValidateModel.value.setPassword(form.password)
  formValidateModel.value.validationLogin()
  formValidateModel.value.validationPassword()

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

const signIn = (e: Event) => {
  e.preventDefault()
  validation()
  const isValid = formValidateModel.value.getIsValid
  if (isValid) {
    form.password = ''
    form.login = ''
    form.errors = {}
    formValidateModel.value.setValid(!isValid)
    formValidateModel.value.clearErrors()
  }
}
</script>

<style lang="scss" scoped></style>
