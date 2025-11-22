import type { TCard } from '@shared/types/cards/card'

export type TCardView = Pick<
  TCard,
  | 'id'
  | 'title'
  | 'viewsCount'
  | 'images'
  | 'tags'
  | 'skills'
  | 'description'
  | 'deadline'
  | 'contacts'
>
