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

  name: {
    regex: /^[A-Za-zА-Яа-яёЁ]+$/,
    minLength: 2,
    maxLength: 50,
    messages: {
      empty: 'Поле для имени пустое!',
      format: 'Поле имени должно содержать только буквы!',
      minLength: 'Имя должно содержать минимум 2 символа',
      maxLength: 'Имя не может быть более 50 символов',
    },
  },

  lastName: {
    regex: /^[A-Za-zА-Яа-яёЁ]+$/,
    minLength: 2,
    maxLength: 50,
    messages: {
      empty: 'Поле для фамилии пустое!',
      format: 'Поле фамилии должно содержать только буквы!',
      minLength: 'Фамилия должно содержать минимум 2 символа!',
      maxLength: 'Фамилия не может быть более 50 символов!',
    },
  },

  middleName: {
    regex: /^[A-Za-zА-Яа-яёЁ]+$/,
    minLength: 2,
    maxLength: 50,
    messages: {
      format: 'Поле отчества должно содержать только буквы!',
      maxLength: 'Отчество не может быть более 50 символов!',
      minLength: 'Отчество не может быть меньше 2 символов!',
    },
  },
} as const

export type FieldType = keyof typeof ValidationRules
export type ValidationResult = Record<string, string>
