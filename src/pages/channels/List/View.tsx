import React from 'react'
import { Divider, Button, Row, Col } from 'antd'
import { ChannelsTable } from './components'
import { createChannelPath } from '../../../routes/paths'
import { PlusOutlined } from '@ant-design/icons'

export const View: React.FunctionComponent = () => {
  return (
    <>
      <Row>
        <Col span={12}>
          <h2>Каналы</h2>
        </Col>
        <Col span={12}>
          <Button
            href={createChannelPath()}
            type="primary"
            style={{ float: 'right' }}
          >
            <PlusOutlined />
            Добавить канал
          </Button>
        </Col>
      </Row>
      <Divider />
      <ChannelsTable />
    </>
  )
}
