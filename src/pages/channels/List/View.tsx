import React from 'react'
import { Divider } from 'antd'
import { ChannelsTable } from './components'
import { ChannelListItem } from "../../../services/api/channels";

type Props = {
  channels?: ChannelListItem[]
  meta?: {
    page: number | null
    perPage: number | null
    totalCount: number
  }
  isLoading: boolean
}

export const View: React.FunctionComponent<Props> = ({
  channels,
  meta,
  isLoading,
}) => {
  return (
    <>
      <h2>Каналы</h2>

      <Divider />

      <ChannelsTable
        channels={channels}
        meta={meta}
        isLoading={isLoading}
      />
    </>
  )
}
