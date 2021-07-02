import React from 'react'
import { Button, notification, Popconfirm } from 'antd'
import { ShowChannel } from '../../../../services/api/channels'
import { useDeleteChannel } from '../../../../services/api/channels'
import { DeleteOutlined } from '@ant-design/icons'

type Props = {
  channel: ShowChannel
  removeChannel: (deleteChannelById: () => Promise<void>) => Promise<void>
}

export const DeleteChannel: React.FunctionComponent<Props> = ({
  channel,
  removeChannel,
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
      <Button type="primary" danger style={{ float: 'right' }}>
        <DeleteOutlined />
        Удалить канал
      </Button>
    </Popconfirm>
  )
}
