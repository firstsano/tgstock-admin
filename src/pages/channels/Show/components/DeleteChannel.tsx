import React from 'react'
import { notification, Popconfirm } from 'antd'
import { ShowChannel } from '../../../../services/api/channels'
import { useDeleteChannel } from '../../../../services/api/channels'

type Props = {
  channel: ShowChannel
  removeChannel: (deleteChannelById: () => Promise<void>) => Promise<void>
}

export const DeleteChannel: React.FunctionComponent<Props> = ({
  channel,
  removeChannel,
  children,
}) => {
  const [deleteChannel] = useDeleteChannel(channel.id)

  const sendDeleteChannel = () => {
    return removeChannel(deleteChannel).catch((error) => {
      notification.error({
        message: error.message,
        duration: 3,
      })
    })
  }

  return (
    <Popconfirm
      placement="top"
      title="Вы действительно хотите удалить канал"
      onConfirm={sendDeleteChannel}
      okText="Да"
      cancelText="Нет"
    >
      {children}
    </Popconfirm>
  )
}
