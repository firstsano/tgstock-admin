import React, { useEffect, useState } from 'react'
import { useQuery } from '../../../utils/hooks/query'
import { defaultPagination } from '../../../services/api/client/types'
import { useHistory } from 'react-router-dom'
import { ChannelListRequest, useChannels } from '../../../services/api/channels'
import { View } from './View'

export const Container: React.FunctionComponent = () => {
  const query = useQuery()
  const history = useHistory()
  const search = query.get('search') as string

  const [getChannels, { response, isLoading }] = useChannels()
  const [request, setRequest] = useState<ChannelListRequest>({
    name: search,
    ...defaultPagination,
  })

  useEffect(() => {
    getChannels(request)
  }, [getChannels, request])

  const onPaginationChange = (page: number, perPage?: number) => {
    setRequest({
      ...request,
      page: page,
      perPage: perPage || defaultPagination.perPage,
    })
  }

  const onSearch = (value: string | undefined) => {
    if (request.name === value) return

    value !== undefined ? query.set('search', value) : query.delete('search')
    history.push({ search: '?' + query.toString() })
    setRequest({
      ...defaultPagination,
      name: value,
    })
  }

  return (
    <View
      search={search}
      channels={response?.data}
      pagination={response?.meta}
      isLoading={isLoading}
      onSearch={onSearch}
      onPaginationChange={onPaginationChange}
    />
  )
}
