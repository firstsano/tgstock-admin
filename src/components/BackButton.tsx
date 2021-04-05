import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

export const BackButton: React.FunctionComponent = () => {
  const history = useHistory()

  return (
    <Button
      type="primary"
      icon={<LeftOutlined />}
      onClick={() => {
        history.goBack()
      }}
    >
      Вернуться
    </Button>
  )
}
