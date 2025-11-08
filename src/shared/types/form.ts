import type { TImage } from '@shared/types/images.ts'

export type TForm = {
  login: string
  email: string
  password: string
  firstName: string
  secondName: string
  lastName: string
  sex: string
  warning: string
  image: TImage
}
