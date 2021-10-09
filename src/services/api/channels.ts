import { useAPI } from './client/useAPI'
import { ListResponse, PaginationRequest, Response } from './client/types'

export type ChannelListItem = {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  avatar?: {
    publicUrl: string
  }
  profile: {
    title: string
    username: string
  }
  categories: {
    id: string
    name: string
  }[]
}
export type ChannelListRequest = PaginationRequest & {
  name?: string
}
type ChannelListResponse = ListResponse<ChannelListItem>
export const useChannels = () => {
  return useAPI<ChannelListResponse, ChannelListRequest>('GET', '/channels', {
    withToken: true,
  })
}

export type ShowChannel = {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  avatar?: {
    publicUrl: string
  }
  profile: {
    title: string
    username: string
    description?: string
    subscribersCount: string
    postCoverage: string
    channelCoverage: string
  }
  categories: {
    id: string
    name: string
  }[]
}
type ShowChannelResponse = Response<ShowChannel>
export const useChannel = (id: string) => {
  return useAPI<ShowChannelResponse, undefined>('GET', `/channels/${id}`, {
    withToken: true,
  })
}

export type CreateChannelRequest = {
  name: string
  categoriesIds?: string[]
}
export type CreateChannelResponse = Response<{
  id: string
  name: string
  createdAt: string
  updatedAt: string
}>
export const useCreateChannel = () => {
  return useAPI<CreateChannelResponse, CreateChannelRequest>(
    'POST',
    '/channels',
    {
      withToken: true,
    }
  )
}

export type UpdateChannelRequest = {
  categoriesIds?: string[]
}
export type UpdateChannelResponse = {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}
export const useUpdateChannel = (id: string) => {
  return useAPI<UpdateChannelResponse, UpdateChannelRequest>(
    'PATCH',
    `/channels/${id}`,
    {
      withToken: true,
    }
  )
}

export const useDeleteChannel = (id: string) => {
  return useAPI<undefined, undefined>('DELETE', `/channels/${id}`, {
    withToken: true,
  })
}
