const setItem = (key: string, value: string): void => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getItem = (key: string): string => {
  return JSON.parse(localStorage?.getItem(key) || '')
}

const removeItem = (key: string): void => {
  localStorage.removeItem(key)
}

export { setItem, getItem, removeItem }
