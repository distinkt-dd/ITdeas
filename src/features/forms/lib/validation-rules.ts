export const ValidationRules = {
  login: {
    regex: /^[a-zA-Z][a-zA-Z0-9]{4,29}$/,
    minLength: 5,
    maxLength: 30,
    messages: {
      empty: 'Поле логина пустое!',
      format:
        'Логин должен быть от 5 до 30 символов, начинаться с буквы и содержать только латинские буквы и цифры.',
      minLength: 'Логин должен содержать минимум 5 символов',
      maxLength: 'Логин не должен превышать 30 символов',
    },
  },

  password: {
    regex: /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,30}$/,
    minLength: 6,
    maxLength: 30,
    messages: {
      empty: 'Поле для пароля пустое!',
      format:
        'Пароль должен быть от 6 до 30 символов и содержать только латинские буквы, цифры, а также может содержать специальные символы: !@#$%^&*()_+-=[]{};\':"|,.<>/?',
      minLength: 'Пароль должен содержать минимум 6 символов',
      maxLength: 'Пароль не должен превышать 30 символов',
    },
  },

  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    messages: {
      empty: 'Поле почты пустое!',
      format: 'Поле почты введено не корректно',
    },
  },
} as const

export type FieldType = keyof typeof ValidationRules
export type ValidationResult = Record<string, string>
