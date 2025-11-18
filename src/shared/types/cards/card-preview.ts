import type { TCard } from '@shared/types/cards/card.ts'

export type TCardPreview = Pick<TCard, 'id' | 'title' | 'skills' | 'description' | 'viewsCount'>
