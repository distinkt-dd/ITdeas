<template>
  <app-form class="sign-in-form" @submit="signIn">
    <AppLogo class="form__logo" />
    <h1 class="form__title sign-in-form__title h1">Войти в ITdeas</h1>
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
      <span v-else>Войти</span>
    </AppButton>
    <div class="form__block">
      <a href="#" class="form__link form__link-effect"> Забыли пароль? </a>
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
  <AppErrorsBar :errors-field="['password', 'login']" />
</template>

<script lang="ts" setup>
import { useFormValidate } from '@/features/forms'
import AppButton from '@shared/ui/elements/button/AppButton'
import FormField from '@shared/ui/elements/field/FormField'
import AppLogo from '@shared/ui/elements/icons/logo/AppLogo'
import AppSpiner from '@shared/ui/elements/spinner/ui/AppSpiner'
import AppErrorsBar from '@widgets/app-errorsbar/ui/AppErrorsBar'
import AppForm from '@widgets/app-form/AppForm'
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { navigator } from '@/shared/utils/navigator'
const router = useRouter()

const formValidation = useFormValidate()

onMounted(() => {
  formValidation.clearAllErrors()
  formValidation.validateForm('signIn')
})

const signIn = (e: Event) => {
  e.preventDefault()
  const isValid = formValidation.validateForm('signIn')

  if (isValid) {
    formValidation.setSubmitting(true)
    setTimeout(() => {
      navigator(router, '/')
      formValidation.clearAll()
    }, 2000)
  }
}
onUnmounted(() => {
  formValidation.clearAll()
})
</script>

<style lang="scss" scoped></style>
