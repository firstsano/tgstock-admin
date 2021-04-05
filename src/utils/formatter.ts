import { isString } from './index'
import moment, { Moment } from 'moment-timezone'

const DEFAULT_SOURCE_FORMAT = 'YYYY-MM-DD HH:mm:ss ZZ'
const DATETIME_FORMAT = 'DD.MM.YYYY, HH:mm:ss'
const TIME_FORMAT = 'HH:mm:ss'
const DATE_FORMAT = 'DD.MM.YYYY'

const AMOUNT_LOCALE = 'ru-RU'

export const toMoment = (datetime: string): Moment => {
  return moment(datetime, DEFAULT_SOURCE_FORMAT)
}

export const displayDate = (datetime: string | Moment): string => {
  const date: Moment = isString(datetime) ? toMoment(datetime) : datetime
  return date.format(DATE_FORMAT)
}

export const displayTime = (datetime: string | Moment): string => {
  const date: Moment = isString(datetime) ? toMoment(datetime) : datetime
  return date.format(TIME_FORMAT)
}

export const displayDatetime = (datetime: string | Moment): string => {
  const date: Moment = isString(datetime) ? toMoment(datetime) : datetime
  return date.format(DATETIME_FORMAT)
}

export const displayIso = (datetime: string | Moment): string => {
  const date: Moment = isString(datetime) ? toMoment(datetime) : datetime
  return date.toISOString()
}

export const displayAmount = (amount: string | number): string => {
  const value: number = isString(amount) ? parseFloat(amount) : amount
  return value.toLocaleString(AMOUNT_LOCALE, {
    minimumFractionDigits: 0,
  })
}
