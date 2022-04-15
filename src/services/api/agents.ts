import { useAPI } from './client/useAPI'
import { ListResponse, Response } from './client/types'

export type AgentListItem = {
  id: string
  phoneNumber: string
  available: boolean
  createdAt: string
  updatedAt: string
}
export const useAgents = () => {
  return useAPI<ListResponse<AgentListItem>>('GET', '/agents', {
    withToken: true,
  })
}

export type CreateAgentRequest = {
  phoneNumber: string
}
export type CreateAgentResponse = Response<{
  id: string
  phoneNumber: string
  available: boolean
  createdAt: string
  updatedAt: string
}>
export const useCreateAgent = () => {
  return useAPI<CreateAgentResponse, CreateAgentRequest>('POST', '/agents', {
    withToken: true,
  })
}

export type AuthKeyListItem = {
  phoneNumber: string
}
export const useAuthKeys = () => {
  return useAPI<ListResponse<AuthKeyListItem>>('GET', '/agents/auth_keys', {
    withToken: true,
  })
}
