import { useCallback, useState } from 'react'
import axios, { AxiosRequestConfig, AxiosTransformer } from 'axios'
import humps from 'humps'
import { useAuth } from '../../auth'
import { APIError, Method } from './types'
import { translateValidationErrors, Validation } from './validation'

type RequestOptions = {
  method: Method
  endpoint: string
  token?: string
  data?: Record<string, any>
  params?: Record<string, any>
}

type Options = {
  withToken?: boolean
}

type ExecuteFn<Response, Request> = Request extends undefined
  ? () => Promise<Response>
  : (requestData: Request) => Promise<Response>

type RequestStates<Response> = {
  isLoading: boolean
  response: Response | null
  error: APIError | null
}

export const useAPI = <Response, Request = undefined>(
  method: Method,
  endpoint: string,
  options: Options = {}
): [ExecuteFn<Response, Request>, RequestStates<Response>] => {
  const { token, removeAuth } = useAuth()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<Response | null>(null)
  const [error, setError] = useState<APIError | null>(null)

  // TODO: сделать так, чтобы нужный тип функции выбирался автоматически
  // @ts-ignore
  const execute: ExecuteFn<Response, Request> = useCallback(
    async (requestData?: Request) => {
      const requestOptions: RequestOptions = {
        method,
        endpoint,
      }

      if (options.withToken) {
        requestOptions.token = token
      }

      if (requestData) {
        if (method === 'GET') {
          requestOptions.params = requestData
        } else {
          requestOptions.data = requestData
        }
      }

      setIsLoading(true)
      setResponse(null)
      setError(null)
      return makeRequest<Response>(requestOptions)
        .then((response) => {
          setIsLoading(false)
          setResponse(response)
          return response
        })
        .catch((error) => {
          const apiError = transformError(error)

          if (apiError.status === 401) {
            removeAuth()
          }

          setIsLoading(false)
          setError(apiError)
          throw apiError
        })
    },
    [endpoint, method, options.withToken, removeAuth, token]
  )

  return [execute, { isLoading, error, response }]
}

export const transformError = (error: any): APIError => {
  const status = error?.response?.status

  if (status === 422) {
    const validation: Validation = translateValidationErrors(
      error.response.data?.error
    )
    return {
      status,
      message: validation.message,
      fieldErrors: validation.details,
    }
  }

  return { status }
}

async function makeRequest<Response>({
  method,
  endpoint,
  token,
  data,
  params,
}: RequestOptions) {
  const config: AxiosRequestConfig = {
    method,
    baseURL: process.env.REACT_APP_API_URL,
    url: endpoint,
    transformResponse: [
      ...(axios.defaults.transformResponse as AxiosTransformer[]),
      (data) => humps.camelizeKeys(data),
    ],
    transformRequest: [
      (data) => humps.decamelizeKeys(data),
      ...(axios.defaults.transformRequest as AxiosTransformer[]),
    ],
  }

  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
    }
  }

  if (data) {
    config.data = data
  }

  if (params) {
    config.params = humps.decamelizeKeys(params)
  }

  return axios.request<Response>(config).then((response) => response.data)
}
