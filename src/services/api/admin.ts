import { Response } from './client/types'
import { useAPI } from './client/useAPI'

export type ChangePasswordRequest = {
  oldPassword: string
  password: string
}

type ChangePasswordResponse = Response<{
  token: string
  admin: {
    id: string
    email: string
  }
}>

export const useChangePassword = () => {
  return useAPI<ChangePasswordResponse, ChangePasswordRequest>(
    'PATCH',
    '/password',
    {
      withToken: true,
    }
  )
}
