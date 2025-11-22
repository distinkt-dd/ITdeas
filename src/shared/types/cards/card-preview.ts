import type { TCard } from '@shared/types/cards/card'

export type TCardPreview = Pick<TCard, 'id' | 'title' | 'skills' | 'description' | 'viewsCount'>
