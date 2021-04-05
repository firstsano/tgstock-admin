import React from 'react'
import { Space } from 'antd'

export const LabeledGroup: React.FunctionComponent = ({ children }) => {
  return (
    <label>
      <Space>{children}</Space>
    </label>
  )
}
