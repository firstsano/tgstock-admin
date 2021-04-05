import React from 'react'
import 'antd/dist/antd.css'
import { ConfigProvider } from 'antd'
import { AppShell } from './components'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './services/auth'
import { settingsPath, createChannelPath, channelsPath } from './routes/paths'
import { BankOutlined, PlusCircleOutlined, SendOutlined } from '@ant-design/icons'

export const App: React.FunctionComponent = () => {
  const items = [
    { path: settingsPath(), title: 'Настройки', icon: <BankOutlined /> },
    { path: createChannelPath(), title: 'Добавить канал', icon: <PlusCircleOutlined /> },
    { path: channelsPath(), title: 'Каналы', icon: <SendOutlined /> }
  ]

  return (
    <ConfigProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppShell items={items} />
        </BrowserRouter>
      </AuthProvider>
    </ConfigProvider>
  )
}
