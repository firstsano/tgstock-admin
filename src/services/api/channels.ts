import { useAPI } from './client/useAPI'
import { ListResponse } from "./client/types";

export type ChannelListItem = {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}

type ChannelListResponse = ListResponse<ChannelListItem>

export const useChannels = () => {
  return useAPI<ChannelListResponse, undefined>(
    'GET',
    '/channels',
    {
      withToken: true,
    }
  )
}

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
