export type Method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'

export type PaginationData = {
  page: number | null
  perPage: number | null
  pagesCount: number
  totalCount: number
}

// Для описания ответов от АПИ
export type Response<Data> = {
  data: Data
}

// Для описания ответов с пагинацией
export type ListResponse<Data> = {
  data: Data[]
  meta: PaginationData
}

// Параметры пагинации
export type PaginationRequest = {
  page: number
  perPage: number
}

export const defaultPagination: PaginationRequest = {
  page: 1,
  perPage: 10,
}

// Ошибки
export type APIError = UnauthorizedError | ValidationError | NotFoundError

type UnauthorizedError = {
  status: 401
}

type NotFoundError = {
  status: 404
}

type ValidationError = {
  status: 422
  message: string
  fieldErrors: Record<string, string>
}

export const isValidationError = (
  error: APIError
): error is ValidationError => {
  return error.status === 422
}

export const isNotFoundError = (error: APIError): error is NotFoundError => {
  return error.status === 404
}
