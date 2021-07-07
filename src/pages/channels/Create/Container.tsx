import React from 'react'
import { useHistory } from 'react-router-dom'
import { notification } from 'antd'
import {
  CreateChannelRequest,
  useCreateChannel,
} from '../../../services/api/channels'
import { View } from './View'
import { channelsPath } from '../../../routes/paths'
import { isEmpty, omit } from 'lodash'

export const Container: React.FunctionComponent = () => {
  const history = useHistory()
  const [createChannel] = useCreateChannel()

  const sendCreateChannel = (channel: CreateChannelRequest) => {
    if (isEmpty(channel.categoriesIds)) {
      channel = omit(channel, 'categoriesIds')
    }
    return createChannel(channel)
      .then((channel) => {
        notification.success({
          message: 'Канал успешно добавлен',
          duration: 3,
        })
        history.push(channelsPath())
      })
      .catch((error) => {
        notification.error({
          message: 'Возникли ошибки при добавлении канала',
          duration: 3,
        })
        throw error
      })
  }

  return <View createChannel={sendCreateChannel} />
}
