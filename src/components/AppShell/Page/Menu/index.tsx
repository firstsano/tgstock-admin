import React from 'react'
import { Menu as AntMenu } from 'antd'
import styles from './styles.module.css'
import { Link, useLocation } from 'react-router-dom'

type Props = {
  items: {
    path: string
    title: string | JSX.Element
    icon: JSX.Element
  }[]
}

export const Menu: React.FunctionComponent<Props> = ({ items }) => {
  const location = useLocation()

  return (
    <AntMenu
      className={styles.menu}
      selectedKeys={[location.pathname]}
      mode="inline"
    >
      {items.map(({ path, title, icon }) => (
        <AntMenu.Item icon={icon} key={path}>
          <Link to={path}>{title}</Link>
        </AntMenu.Item>
      ))}
    </AntMenu>
  )
}
