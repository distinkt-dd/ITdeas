export type FormData = {
  login: string
  password: string
  email: string
  name: string
  lastName: string
  middleName: string
}

export type TFormDataProfile = Pick<FormData, 'name' | 'lastName'>
