export const reverseString = (value: string): string => {
  return value.split('').reverse().join('')
}

// TODO: remove that mess
export const safePrintValue = (value: any): string => {
  return value === undefined ? 'Отсутствует' : value.toString()
}

export const indexBy = <source>(
  array: source[],
  key: string
): Record<string, source> => {
  const hashMap: Record<string, source> = {}
  array.forEach((element) => {
    // @ts-ignore
    hashMap[element[key]] = element
  })

  return hashMap
}

export const isString = (object: any): object is string => {
  return typeof object === 'string'
}
