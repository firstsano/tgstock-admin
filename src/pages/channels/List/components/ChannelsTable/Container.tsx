import React, { useEffect, useState } from 'react'
import {
  ChannelListRequest,
  useChannels,
} from '../../../../../services/api/channels'
import { View } from './View'
import { Button, Result } from 'antd'
import { defaultPagination } from '../../../../../services/api/client/types'

export const Container: React.FunctionComponent = () => {
  const [getChannels, { error, response, isLoading }] = useChannels()
  const [request, setRequest] = useState<ChannelListRequest>({
    ...defaultPagination,
  })

  useEffect(() => {
    getChannels(request)
  }, [getChannels, request])

  const onPaginationChange = (page: number, perPage?: number) => {
    setRequest({
      page: page,
      perPage: perPage || defaultPagination.perPage,
    })
  }

  if (error) {
    return (
      <Result
        status="500"
        title="Возникла проблема при загрузке каналов"
        extra={
          <Button
            type="primary"
            onClick={() => getChannels({ ...defaultPagination })}
          >
            Повторить
          </Button>
        }
      />
    )
  }

  return (
    <View
      channels={response?.data}
      pagination={response?.meta}
      onPaginationChange={onPaginationChange}
      isLoading={isLoading}
    />
  )
}
