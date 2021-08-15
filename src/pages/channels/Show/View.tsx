import React from 'react'
import { Divider, Avatar, Tag, Col, Row, Button } from 'antd'
import { ShowChannel } from '../../../services/api/channels'
import { Property } from '../../../components'
import { EditOutlined, SendOutlined } from '@ant-design/icons'
import { DeleteChannel } from './components'
import { updateChannelPath } from '../../../routes/paths'

type Props = {
  channel: ShowChannel
  removeChannel: (deleteChannelById: () => Promise<void>) => Promise<void>
}

export const View: React.FunctionComponent<Props> = ({
  channel,
  removeChannel,
}) => {
  return (
    <>
      <Row>
        <Col span={12}>
          <h2> Канал | {channel.profile.title} </h2>
        </Col>
        <Col span={12}>
          <DeleteChannel channel={channel} removeChannel={removeChannel} />
          <Button
            type="primary"
            style={{ float: 'right' }}
            href={updateChannelPath(channel.id)}
          >
            <EditOutlined />
            Редактировать канал
          </Button>
        </Col>
      </Row>

      <Divider />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: 200, marginRight: 15 }}>
          <Avatar
            shape="square"
            icon={<SendOutlined />}
            src={channel.avatar?.publicUrl}
            size={200}
          />
        </div>
        <div style={{ flexGrow: 1 }}>
          <Property label="Идентификатор">{channel.id}</Property>
          <Divider />
          <Property label="Username">{channel.profile.username}</Property>
          <Property label="Название">{channel.profile.title}</Property>
          <Property label="Описание">{channel.profile?.description}</Property>
          <Divider />
          <Property label="Категории">
            {channel.categories.map((category) => (
              <Tag key={category.id}>{category.name}</Tag>
            ))}
          </Property>
        </div>
      </div>
    </>
  )
}
