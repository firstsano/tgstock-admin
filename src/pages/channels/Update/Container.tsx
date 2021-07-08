import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { notification } from 'antd'
import {
  ShowChannel,
  UpdateChannelRequest,
  useChannel,
  useUpdateChannel,
} from '../../../services/api/channels'
import { View } from './View'
import { channelPath } from '../../../routes/paths'
import { AsyncStates } from '../../../components'

export const Container: React.FunctionComponent = () => {
  const { id } = useParams()
  const history = useHistory()
  const [updateChannel] = useUpdateChannel(id)
  const [getChannel, { error, response, isLoading }] = useChannel(id)

  useEffect(() => {
    getChannel()
  }, [getChannel])

  const sendUpdateChannel = (channel: UpdateChannelRequest) => {
    return updateChannel(channel)
      .then(() => {
        notification.success({
          message: 'Канал успешно обновлен',
          duration: 3,
        })
        history.push(channelPath(id))
      })
      .catch((error) => {
        notification.error({
          message: 'Возникли ошибки при обновлении канала',
          duration: 3,
        })
        throw error
      })
  }

  return (
    <AsyncStates<ShowChannel>
      renderNotFound
      isLoading={isLoading}
      error={error}
      errorMessage="Не удалось загрузить канал"
      reload={() => getChannel()}
      response={response}
      renderData={(channel) => {
        return <View channel={channel} updateChannel={sendUpdateChannel} />
      }}
    />
  )
}
