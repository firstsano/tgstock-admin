import React from 'react'
import { Space, Table, Tag } from 'antd'
import { defaultPagination } from '../../../../../services/api/client/types'
import { ChannelListItem } from "../../../../../services/api/channels";

type TableProps = {
  channels?: ChannelListItem[]
  meta?: any
  isLoading: boolean
}

export const ChannelsTable: React.FunctionComponent<TableProps> = ({
                                                                         channels,
  meta,
  isLoading,
}) => {
  return (
    <Table
      dataSource={channels}
      columns={[
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: 'Имя',
          dataIndex: 'name',
        },
      ]}
      pagination={{
        hideOnSinglePage: true,
        current: meta?.page || defaultPagination.page,
        pageSize: meta?.perPage || defaultPagination.perPage,
        total: meta?.totalCount,
        defaultCurrent: defaultPagination.page,
        defaultPageSize: defaultPagination.perPage,
      }}
      loading={isLoading}
      rowKey={(channel) => channel.id}
    />
  )
}
