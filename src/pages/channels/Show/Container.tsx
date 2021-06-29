import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { View } from './View'
import { useChannel } from '../../../services/api/channels'
import { AsyncStates } from '../../../components'
import { ShowChannel } from '../../../services/api/channels'
import { notification } from 'antd'
import { channelsPath } from '../../../routes/paths'

export const Container: React.FunctionComponent = () => {
  const { id } = useParams()
  const history = useHistory()
  const [getChannel, { error, response, isLoading }] = useChannel(id)

  useEffect(() => {
    getChannel()
  }, [getChannel])

  const removeChannel = (
    deleteChannelById: () => Promise<void>
  ): Promise<void> => {
    return deleteChannelById()
      .then(() => {
        notification.success({
          message: 'Канал успешно удален',
          duration: 3,
        })
        history.push(channelsPath())
      })
      .catch((error) => {
        notification.error({
          message: 'Ошибка при удалении канала',
          duration: 3,
        })
        throw error
      })
  }

  return (
    <AsyncStates<ShowChannel>
      isLoading={isLoading}
      error={error}
      errorMessage="Не удалось загрузить канал"
      reload={() => getChannel()}
      response={response}
      renderData={(channel) => {
        return <View channel={channel} removeChannel={removeChannel} />
      }}
    />
  )
}
