import { ValidationRules } from '@features/forms/lib/validation-rules.ts'
import type { ValidationResult } from '@/features/forms/lib/validation-rules.ts'
import type { FieldType } from '@/features/forms/lib/validation-rules.ts'

export class FormValidators {
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
      default:
        return {}
    }
  }
}
