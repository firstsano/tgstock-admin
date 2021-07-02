import React from 'react'
import { Divider, Button, Row, Col } from 'antd'
import { ChannelsTable, Search } from './components'
import { createChannelPath } from '../../../routes/paths'
import { PlusOutlined } from '@ant-design/icons'
import { ChannelListItem } from '../../../services/api/channels'
import { PaginationData } from '../../../services/api/client/types'

type Props = {
  search?: string
  channels?: ChannelListItem[]
  isLoading: boolean
  pagination?: PaginationData
  onPaginationChange: (page: number, perPage?: number) => void
  onSearch: (value: string | undefined) => void
}

export const View: React.FunctionComponent<Props> = ({
  search,
  channels,
  isLoading,
  pagination,
  onPaginationChange,
  onSearch,
}) => {
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

      <Search value={search} handleSearch={onSearch} />

      <Divider />

      <ChannelsTable
        channels={channels}
        isLoading={isLoading}
        pagination={pagination}
        onPaginationChange={onPaginationChange}
      />
    </>
  )
}
