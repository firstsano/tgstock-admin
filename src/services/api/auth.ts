import { Response } from './client/types'
import { useAPI } from './client/useAPI'

export type SignInRequest = {
  email: string
  password: string
}

type SignInResponse = Response<{
  token: string
  admin: {
    id: string
    email: string
  }
}>

export const useSignIn = () => {
  return useAPI<SignInResponse, SignInRequest>('POST', '/auth')
}

export type ResetPasswordRequest = {
  email: string
}

export const useResetPassword = () => {
  return useAPI<undefined, ResetPasswordRequest>('POST', '/password/reset')
}

export type VerifyPassportRequest = {
  token: string
  password: string
}

export const useVerifyPassword = () => {
  return useAPI<undefined, VerifyPassportRequest>('POST', '/password/confirm')
}
