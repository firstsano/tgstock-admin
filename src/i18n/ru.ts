import humps from 'humps'

export const validation = {
  mustBeFilled: 'Поле должно быть заполнено',
  mustBeValidRussianName: 'Допустимы только русские символы',
  wrongFormat: 'Неверный формат',
  wrongSize: 'Неверный размер',
  decimalRequired: 'Требуется числовое значение',
  badDate: 'Неверная дата',
  accountBalanceInsufficient: 'Недостаточно средств',
  default: 'Ошибка валидации',
}

export const translate = (vocabulary: any, message: string): string => {
  return vocabulary[humps.camelize(message)]
}

export const translator = (vocabulary: any): ((message: string) => string) => {
  return (message: string): string => {
    return vocabulary[humps.camelize(message)]
  }
}
