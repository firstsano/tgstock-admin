import { isString } from './index'

const DEFAULT_SOURCE_FORMAT = 'YYYY-MM-DD HH:mm:ss ZZ'
const DATETIME_FORMAT = 'DD.MM.YYYY, HH:mm:ss'
const TIME_FORMAT = 'HH:mm:ss'
const DATE_FORMAT = 'DD.MM.YYYY'

const AMOUNT_LOCALE = 'ru-RU'

export const displayAmount = (amount: string | number): string => {
  const value: number = isString(amount) ? parseFloat(amount) : amount
  return value.toLocaleString(AMOUNT_LOCALE, {
    minimumFractionDigits: 0,
  })
}
