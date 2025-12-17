import { reactive } from 'vue'

interface IFilterElements {
  id: number
  elName: string
}

interface IFilterBlock {
  id: number
  name: string
  text?: string
  elements: IFilterElements[]
}

export interface IFilterWidgetConfig {
  [key: string]: IFilterBlock
}

export const filterWidgetConfig = reactive<IFilterWidgetConfig>({
  skills: {
    id: 0,
    name: 'fil-skills',
    text: 'По требуемым навыкам',
    elements: [
      { id: 0, elName: 'HTML' },
      { id: 1, elName: 'CSS' },
      { id: 2, elName: 'SCSS' },
      { id: 3, elName: 'JS' },
      { id: 4, elName: 'TS' },
      { id: 5, elName: 'VITE' },
      { id: 6, elName: 'VUE' },
    ],
  },
  typeCoop: {
    id: 1,
    name: 'fil-coop',
    text: 'По типу сотрудничества',
    elements: [
      { id: 0, elName: 'Энтузиазм' },
      { id: 1, elName: 'Оплата' },
    ],
  },
})
