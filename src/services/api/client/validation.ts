import humps from 'humps'
import { set } from 'lodash'
import { translator, validation } from '../../../i18n/ru'

const translate: (message: string) => string = translator(validation)

function translateCode(code: string): string {
  return translate(code) || translate('default')
}

export type ValidationError = {
  code: string
  message: string
  details: {
    target: string
    code: string
  }[]
}

export type Validation = {
  message: string
  details: Record<string, string>
}

export const translateValidationErrors = (
  error: ValidationError
): Validation => {
  const details: Record<string, string> = error.details.reduce(
    (formErrors, fieldError) => {
      return set(
        formErrors,
        humps.camelize(fieldError.target),
        translateCode(fieldError.code)
      )
    },
    {}
  )

  return {
    message: translateCode(error.code),
    details: details,
  }
}
