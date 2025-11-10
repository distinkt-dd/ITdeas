import { defineStore } from 'pinia'
import type { TFormBase } from '@shared/types/forms/form.ts'
import type { TSignInForm } from '@shared/types/forms/signInForm.ts'
import type { TSignUpForm } from '@shared/types/forms/signUpForm.ts'

type TUnionFormTypes = TFormBase & TSignUpForm & TSignInForm

export const useFormValidate = defineStore('formValidation', {
  state: (): TUnionFormTypes => ({
    errors: {},
    isValid: false,
    login: '',
    password: '',
    email: '',
  }),
  getters: {
    getErrors(): Record<string, Record<string, string>> {
      return this.errors
    },

    getErrorsLogin(): Record<string, string> | undefined {
      return this.errors.login
    },

    getErrorsPassword(): Record<string, string> | undefined {
      return this.errors.password
    },

    getIsValid(): boolean | undefined {
      return this.isValid
    },
  },
  actions: {
    validationPassword(): void {
      if (this.errors.password) {
        delete this.errors.password
      }

      const errors: Record<string, string> = {}
      const regex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,30}$/

      if (!this.password || this.login.trim() === '') {
        errors.emptyPassword = 'Поле для пароля пустое!'
      }

      if (!regex.test(this.password)) {
        errors.notCorrectPassword =
          'Пароль должен быть от 6 до 30 символов и содержать только латинские буквы, цифры, а также может содержать специальные символы: !@#$%^&*()_+-=[]{};\':"|,.<>/?'
      }

      if (Object.keys(errors).length > 0) {
        this.errors.password = errors
      }
    },

    validationLogin(): void {
      if (this.errors.login) {
        delete this.errors.login
      }

      const errors: Record<string, string> = {}
      const regex = /^[a-zA-Z][a-zA-Z0-9]{4,29}$/

      if (!this.login || this.login.trim() === '') {
        errors.emptyLogin = 'Поле логина пустое!'
      }

      if (!regex.test(this.login)) {
        errors.notCorrectLogin =
          'Логин должен быть от 5 до 30 символов, начинаться с буквы и содержать только латинские буквы и цифры'
      }

      if (Object.keys(errors).length > 0) {
        this.errors.login = errors
      }
    },

    validationEmail(): void {
      if (this.errors.email) {
        delete this.errors.email
      }

      const errors: Record<string, string> = {}
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (!this.email || this.email.trim() === '') {
        errors.emptyEmail = 'Поле почты постое!'
      }

      if (!regex.test(this.email)) {
        errors.notCorrectEmail = 'Поле почты введено не корректно'
      }

      if (Object.keys(errors).length > 0) {
        this.errors.email = errors
      }

      console.log(errors)
    },

    setLogin(loginField: string): void {
      this.login = loginField
    },

    setPassword(passwordField: string): void {
      this.password = passwordField
    },

    setValid(validValue: boolean): void {
      this.isValid = validValue
    },

    setEmail(emailField: string): void {
      this.email = emailField
    },

    clearErrors(): void {
      this.errors = {}
    },
  },
})
