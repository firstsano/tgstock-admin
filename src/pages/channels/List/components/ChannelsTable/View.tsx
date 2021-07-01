import React from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar, Table, Tag } from 'antd'
import { PaginationData } from '../../../../../services/api/client/types'
import { defaultPagination } from '../../../../../services/api/client/types'
import { ChannelListItem } from '../../../../../services/api/channels'
import { channelPath } from '../../../../../routes/paths'
import { UserOutlined } from '@ant-design/icons'

type TableProps = {
  channels?: ChannelListItem[]
  pagination?: PaginationData
  onPaginationChange: (page: number, perPage?: number) => void
  isLoading: boolean
}

export const View: React.FunctionComponent<TableProps> = ({
  channels,
  pagination,
  onPaginationChange,
  isLoading,
}) => {
  const history = useHistory()

  return (
    <Table
      dataSource={channels}
      columns={[
        {
          render: (_, channel) => (
            <Avatar icon={<UserOutlined />} src={channel.avatar.publicUrl} />
          ),
        },
        {
          title: 'Имя',
          dataIndex: 'name',
        },
        {
          title: 'Название',
          render: (_, channel) => channel.profile.title,
        },
        {
          title: 'Категории',
          render: (_, channel) =>
            channel.categories.map((category) => (
              <Tag key={category.id}>{category.name}</Tag>
            )),
        },
      ]}
      pagination={{
        current: pagination?.page || defaultPagination.page,
        pageSize: pagination?.perPage || defaultPagination.perPage,
        total: pagination?.totalCount,
        defaultCurrent: defaultPagination.page,
        defaultPageSize: defaultPagination.perPage,
        onChange: onPaginationChange,
      }}
      locale={{
        emptyText: 'Каналов не найдено',
      }}
      loading={isLoading}
      rowKey={(channel) => channel.id}
      onRow={(channel) => {
        return {
          onClick: () => history.push(channelPath(channel.id)),
        }
      }}
    />
  )
}
