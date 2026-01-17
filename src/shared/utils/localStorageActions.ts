export function setLocalStorageByKeyOrSaveNewValue<T, K>(
  key: string,
  item: T,
  defaultSave?: K,
): undefined {
  const currentValueItem = getLocalStorageItemByKey(key)
  try {
    if (currentValueItem) {
      localStorage.setItem(key, JSON.stringify({ ...currentValueItem, item }))
    } else {
      if (defaultSave) {
        localStorage.setItem(key, JSON.stringify({ ...defaultSave, item }))
      } else {
        console.error('Функция требует третий параметр - defaultSave')
        return undefined
      }
    }
  } catch (error) {
    console.error(`Ошибка получения данных из localStorage по ключу(${key}): ${error}`)
  }
}

export function getOrInitLocalStorageItem<T>(key: string, initialValue: T): T | undefined {
  try {
    const item = localStorage.getItem(key)
    if (!item) {
      localStorage.setItem(key, JSON.stringify(initialValue))
      return undefined
    }
    const parsed = JSON.parse(item)

    return parsed as T
  } catch (error) {
    console.error(`Ошибка работы localStorage (ключ: ${key}): ${error}`)
    localStorage.setItem(key, JSON.stringify(initialValue))
    return initialValue
  }
}

export function getLocalStorageItemByKey<T>(key: string): T | undefined {
  try {
    const item = localStorage.getItem(key)
    if (!item) return undefined
    const parsed = JSON.parse(item)
    return parsed as T
  } catch (error) {
    console.error(`Ошибка при чтении из localStorage (ключ: ${key}):`, error)
    return undefined
  }
}
