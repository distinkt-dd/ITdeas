import type { TCardImage } from '@shared/types/cards/card-image'

export type TCard = {
  id: string
  authorId: string
  authorName: string
  title: string
  description: string
  contacts: Record<string, string>
  tags: string[]
  skills: string[]
  images: TCardImage
  status: string
  deadline?: Date
  viewsCount: string
}
