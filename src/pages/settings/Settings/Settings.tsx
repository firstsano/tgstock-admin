import React from 'react'
import { Descriptions } from 'antd'
import { useAuth } from '../../../services/auth'

export const Settings: React.FunctionComponent = () => {
  const { admin } = useAuth()

  return (
    <>
      <h2>Настройки</h2>

      <Descriptions bordered column={1} title="Данные администратора">
        <Descriptions.Item label="id">{admin.id}</Descriptions.Item>
        <Descriptions.Item label="email">{admin.email}</Descriptions.Item>
      </Descriptions>
    </>
  )
}
