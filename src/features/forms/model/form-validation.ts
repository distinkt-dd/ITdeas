import type { FieldType } from '@/features/forms/lib/validation-rules'
import { FormValidators } from '@/features/forms/lib/validators'
import type { FormData } from '@shared/types/forms/FormData'
import { defineStore } from 'pinia'

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
      name: '',
      lastName: '',
      middleName: '',
    },
  }),
  getters: {
    hasErrors: (state) => Object.keys(state.errors).length > 0,

    loginErrors: (state) => state.errors.login || {},
    passwordErrors: (state) => state.errors.password || {},
    emailErrors: (state) => state.errors.email || {},
    nameErrors: (state) => state.errors.name || {},
    lastNameErrors: (state) => state.errors.lastName || {},
    middleNameErrors: (state) => state.errors.middleName || {},

    // Для boolean значений в компонентах

    hasLoginErrors: (state) => !!state.errors.login,
    hasPasswordErrors: (state) => !!state.errors.password,
    hasEmailErrors: (state) => !!state.errors.email,
    hasNameErrors: (state) => !!state.errors.name,
    hasLastNameErrors: (state) => !!state.errors.lastName,
    hasMiddleNameErrors: (state) => !!state.errors.middleName,

    getLogin: (state) => state.formData.login,
    getPassword: (state) => state.formData.password,
    getEmail: (state) => state.formData.email,
    getName: (state) => state.formData.name,
    getLastName: (state) => state.formData.lastName,
    getMiddleName: (state) => state.formData.middleName,
  },
  actions: {
    setField<T extends keyof FormData>(field: T, value: FormData[T]) {
      this.formData[field] = value
      if (field === 'login') this.validateLogin()
      if (field === 'password') this.validatePassword()
      if (field === 'email') this.validateEmail()
      if (field === 'name') this.validateName()
      if (field === 'lastName') this.validateLastName()
      if (field === 'middleName') this.validateMiddleName()
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

    setName(name: string) {
      this.setField('name', name)
    },

    setLastName(lastName: string) {
      this.setField('lastName', lastName)
    },

    setMiddleName(middleName: string) {
      this.setField('middleName', middleName)
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

    validateName() {
      this.validateField('name')
    },

    validateLastName() {
      this.validateField('lastName')
    },

    validateMiddleName() {
      this.validateField('middleName')
    },

    validateForm(formType: 'signIn' | 'signUp' | 'fio'): boolean {
      if (formType === 'signIn') {
        this.validateLogin()
        this.validatePassword()
      }

      if (formType === 'signUp') {
        this.validateLogin()
        this.validatePassword()
        this.validateEmail()
      }

      if (formType === 'fio') {
        this.validateName()
        this.validateLastName()
        this.validateMiddleName()
      }

      this.updateFormValidity()
      return this.isValid
    },

    updateFormValidity() {
      const requiredFields: FieldType[] = [
        'login',
        'password',
        'name',
        'email',
        'lastName',
        'middleName',
      ]
      const hasErrors = requiredFields.some((field) => this.errors[field])
      console.dir(hasErrors)
      const allFieldsFilled = requiredFields.every(
        (field) => this.formData[field]?.trim().length > 0,
      )
      console.dir(allFieldsFilled)
      this.isValid = !hasErrors
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
        name: '',
        lastName: '',
        middleName: '',
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
