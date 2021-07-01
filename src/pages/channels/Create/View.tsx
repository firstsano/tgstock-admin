import React from 'react'
import { Divider } from 'antd'
import {
  CreateChannelRequest,
  CreateChannelResponse,
} from '../../../services/api/channels'
import { Form } from './components'

type Props = {
  createChannel: (
    form: CreateChannelRequest
  ) => Promise<CreateChannelResponse | void>
}

export const View: React.FunctionComponent<Props> = ({ createChannel }) => {
  return (
    <>
      <h2>Добавить канал</h2>
      <Divider />
      <Form createChannel={createChannel} />
    </>
  )
}
