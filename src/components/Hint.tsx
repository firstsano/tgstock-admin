import React from 'react'
import { Tooltip } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'

type Props = {
  message: string
}

export const Hint: React.FunctionComponent<Props> = ({ children, message }) => {
  return (
    <>
      {children}

      <Tooltip placement="top" title={<small>{message}</small>}>
        <QuestionCircleOutlined
          style={{
            marginLeft: 5,
            color: 'rgba(0, 0, 0, 0.5)',
            cursor: 'pointer',
          }}
        />
      </Tooltip>
    </>
  )
}
