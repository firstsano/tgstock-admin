import React from 'react'
import { Layout } from 'antd'
import styles from './styles.module.css'
import { Logo } from './Logo'
import { Navigation } from './Navigation'

const { Header: AntdHeader } = Layout
type Props = {
  isAuthorized: boolean
  username: string
  removeAuth: () => void
}

export const Header: React.FunctionComponent<Props> = ({
  isAuthorized,
  username,
  removeAuth,
}) => {
  return (
    <AntdHeader className={styles.header}>
      <div className={!isAuthorized ? styles.unauthorizedLayout : ''}>
        <div className={styles.content}>
          <Logo />
          {isAuthorized ? <Navigation {...{ username, removeAuth }} /> : null}
        </div>
      </div>
    </AntdHeader>
  )
}
