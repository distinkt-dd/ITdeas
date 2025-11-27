import { reactive } from 'vue'

type TConfigOtherInformation = {
  title: string
  links: string[]
}

interface IConfigOtherInformation {
  additional: TConfigOtherInformation
  info: TConfigOtherInformation
}

export const config: IConfigOtherInformation = reactive({
  additional: {
    title: 'Дополнительная информация',
    links: ['Инструкция по использованию'],
  },
  info: {
    title: 'Информация',
    links: ['Связаться с разработчиками', 'Политика конфиденциальности'],
  },
})
