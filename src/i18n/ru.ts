import humps from 'humps'

export const validation = {
  taken: 'Такое значение уже существует',
  relatedModelExist: 'У объекта есть зависимости',
  mustBeFilled: 'Поле должно быть заполнено',
  mustBeValidRussianName: 'Допустимы только русские символы',
  wrongFormat: 'Неверный формат',
  wrongSize: 'Неверный размер',
  decimalRequired: 'Требуется числовое значение',
  badDate: 'Неверная дата',
  accountBalanceInsufficient: 'Недостаточно средств',
  authFilesNotFound: 'Файлы аутентификации не найдены на удаленном хранилище',
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
