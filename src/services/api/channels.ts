import { useAPI } from './client/useAPI'

export type CreateChannelRequest = {
  name: string
}
export type CreateChannelResponse = {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}

export const useCreateChannel = () => {
  return useAPI<CreateChannelResponse, CreateChannelRequest>(
    'POST',
    '/channels',
    {
      withToken: true,
    }
  )
}
