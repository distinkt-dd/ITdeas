import type { FieldType, ValidationResult } from '@/features/forms/lib/validation-rules'
import { ValidationRules } from '@features/forms/lib/validation-rules'

export class FormValidators {
  static validateMiddleName(middleName: string): ValidationResult {
    const errors: ValidationResult = {}
    const rules = ValidationRules.middleName

    if (middleName.length > rules.maxLength) {
      errors.maxLength = rules.messages.maxLength
    }

    if (middleName.length > 0 && !rules.regex.test(middleName)) {
      errors.format = rules.messages.format
    }

    if (middleName.length > 0 && middleName.length < rules.minLength) {
      errors.minLength = rules.messages.minLength
    }

    return errors
  }

  static validateLastName(lastName: string): ValidationResult {
    const errors: ValidationResult = {}
    const rules = ValidationRules.lastName

    if (!lastName?.trim()) {
      errors.empty = rules.messages.empty
      return errors
    }

    if (lastName.length < rules.minLength) {
      errors.minLength = rules.messages.minLength
    }

    if (lastName.length > rules.maxLength) {
      errors.maxLength = rules.messages.maxLength
    }

    if (!rules.regex.test(lastName)) {
      errors.format = rules.messages.format
    }

    return errors
  }

  static validateName(name: string): ValidationResult {
    const errors: ValidationResult = {}
    const rules = ValidationRules.name

    if (!name?.trim()) {
      errors.empty = rules.messages.empty
      return errors
    }

    if (name.length < rules.minLength) {
      errors.minLength = rules.messages.minLength
    }

    if (name.length > rules.maxLength) {
      errors.maxLength = rules.messages.maxLength
    }

    if (!rules.regex.test(name)) {
      errors.format = rules.messages.format
    }

    return errors
  }

  static validateLogin(login: string): ValidationResult {
    const errors: ValidationResult = {}
    const rules = ValidationRules.login

    if (!login?.trim()) {
      errors.empty = rules.messages.empty
      return errors
    }

    if (login.length < rules.minLength) {
      errors.minLength = rules.messages.minLength
    }

    if (login.length > rules.maxLength) {
      errors.maxLength = rules.messages.maxLength
    }

    if (!rules.regex.test(login)) {
      errors.format = rules.messages.format
    }

    return errors
  }

  static validatePassword(password: string): ValidationResult {
    const errors: ValidationResult = {}
    const rules = ValidationRules.password

    if (!password?.trim()) {
      errors.empty = rules.messages.empty
      return errors
    }

    if (password.length < rules.minLength) {
      errors.minLength = rules.messages.minLength
    }

    if (password.length > rules.maxLength) {
      errors.maxLength = rules.messages.maxLength
    }

    if (!rules.regex.test(password)) {
      errors.format = rules.messages.format
    }

    return errors
  }

  static validateEmail(email: string): ValidationResult {
    const errors: ValidationResult = {}
    const rules = ValidationRules.email

    if (!email?.trim()) {
      errors.empty = rules.messages.empty
      return errors
    }

    if (!rules.regex.test(email)) {
      errors.format = rules.messages.format
    }

    return errors
  }

  static validateField(field: FieldType, value: string): ValidationResult {
    switch (field) {
      case 'login':
        return this.validateLogin(value)
      case 'password':
        return this.validatePassword(value)
      case 'email':
        return this.validateEmail(value)
      case 'name':
        return this.validateName(value)
      case 'lastName':
        return this.validateLastName(value)
      case 'middleName':
        return this.validateMiddleName(value)
      default:
        return {}
    }
  }
}
