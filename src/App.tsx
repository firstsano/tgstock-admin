import React from 'react'
import 'antd/dist/antd.css'
import { ConfigProvider } from 'antd'
import { AppShell } from './components'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './services/auth'
import { channelsPath, categoriesPath } from './routes/paths'
import { SendOutlined, TagOutlined } from '@ant-design/icons'
import { SecurityProvider } from './services/security'

export const App: React.FunctionComponent = () => {
  const items = [
    { path: channelsPath(), title: 'Каналы', icon: <SendOutlined /> },
    {
      path: categoriesPath(),
      title: 'Категории каналов',
      icon: <TagOutlined />,
    },
  ]

  return (
    <ConfigProvider>
      <AuthProvider>
        <SecurityProvider>
          <BrowserRouter>
            <AppShell items={items} />
          </BrowserRouter>
        </SecurityProvider>
      </AuthProvider>
    </ConfigProvider>
  )
}
