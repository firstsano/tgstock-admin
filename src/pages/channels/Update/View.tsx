import React from 'react'
import { Divider } from 'antd'
import {
  ShowChannel,
  UpdateChannelRequest,
  UpdateChannelResponse,
} from '../../../services/api/channels'
import { Form } from './components'

type Props = {
  channel: ShowChannel
  updateChannel: (
    form: UpdateChannelRequest
  ) => Promise<UpdateChannelResponse | void>
}

export const View: React.FunctionComponent<Props> = ({
  channel,
  updateChannel,
}) => {
  return (
    <>
      <h2>Обновить данные канала | {channel.name}</h2>
      <Divider />
      <Form channel={channel} updateChannel={updateChannel} />
    </>
  )
}
