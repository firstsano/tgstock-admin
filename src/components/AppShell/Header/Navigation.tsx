import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { settingsPath } from '../../../routes/paths'

const { Item } = Menu
type Props = {
  username: string
  removeAuth: () => void
}

export const Navigation: React.FunctionComponent<Props> = ({
  username,
  removeAuth,
}) => {
  return (
    <Menu theme="dark" mode="horizontal" selectable={false}>
      <Item>
        <Link to={settingsPath()}>{username}</Link>
      </Item>
      <Item onClick={removeAuth}>
        <LogoutOutlined />
        Выйти
      </Item>
    </Menu>
  )
}
