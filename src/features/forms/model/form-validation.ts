import { defineStore } from 'pinia'
import type { FormData } from '@shared/types/forms/FormData.ts'
import { FormValidators } from '@/features/forms/lib/validators.ts'
import type { FieldType } from '@/features/forms/lib/validation-rules.ts'

interface FormValidationState {
  errors: Record<string, Record<string, string>>
  isValid: boolean
  isSubmitting: boolean
  formData: FormData
}

export const useFormValidate = defineStore('formValidation', {
  state: (): FormValidationState => ({
    errors: {},
    isValid: false,
    isSubmitting: false,
    formData: {
      login: '',
      password: '',
      email: '',
    },
  }),
  getters: {
    hasErrors: (state) => Object.keys(state.errors).length > 0,

    loginErrors: (state) => state.errors.login || {},
    passwordErrors: (state) => state.errors.password || {},
    emailErrors: (state) => state.errors.email || {},

    // Для boolean значений в компонентах

    hasLoginErrors: (state) => !!state.errors.login,
    hasPasswordErrors: (state) => !!state.errors.password,
    hasEmailErrors: (state) => !!state.errors.email,

    getLogin: (state) => state.formData.login,
    getPassword: (state) => state.formData.password,
    getEmail: (state) => state.formData.email,
  },
  actions: {
    setField<T extends keyof FormData>(field: T, value: FormData[T]) {
      this.formData[field] = value
      if (field === 'login') this.validateLogin()
      if (field === 'password') this.validatePassword()
      if (field === 'email') this.validateEmail()
    },

    setLogin(login: string) {
      this.setField('login', login)
    },

    setPassword(password: string) {
      this.setField('password', password)
    },

    setEmail(email: string) {
      this.setField('email', email)
    },

    validateField(field: FieldType) {
      const value = this.formData[field]
      const errors = FormValidators.validateField(field, value)

      this.clearFieldErrors(field)
      if (Object.keys(errors).length > 0) {
        this.errors[field] = errors
      }

      this.updateFormValidity()
    },

    validateLogin() {
      this.validateField('login')
    },

    validatePassword() {
      this.validateField('password')
    },

    validateEmail() {
      this.validateField('email')
    },

    validateForm(formType: 'signIn' | 'signUp'): boolean {
      this.validateLogin()
      this.validatePassword()

      if (formType === 'signUp') {
        this.validateEmail()
      }

      this.updateFormValidity()
      return this.isValid
    },

    updateFormValidity() {
      const requiredFields: FieldType[] = ['login', 'password']
      const hasErrors = requiredFields.some((field) => this.errors[field])

      const allFieldsFilled = requiredFields.every(
        (field) => this.formData[field]?.trim().length > 0,
      )

      this.isValid = allFieldsFilled && !hasErrors
    },

    clearFieldErrors(field: string) {
      if (this.errors[field]) {
        delete this.errors[field]
      }
    },

    clearAllErrors() {
      this.errors = {}
      this.updateFormValidity()
    },

    clearAll() {
      this.errors = {}
      this.isValid = false
      this.isSubmitting = false
      this.formData = {
        login: '',
        password: '',
        email: '',
      }
    },

    setSubmitting(isSubmitting: boolean) {
      this.isSubmitting = isSubmitting
    },

    getFormData() {
      return { ...this.formData }
    },
  },
})
