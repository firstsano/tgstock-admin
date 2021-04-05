import React from 'react'
import { Layout } from 'antd'
import styles from './styles.module.css'
import { Header } from './Header'
import { Page } from './Page'
import { Router } from './Router'
import { useAuth } from '../../services/auth'
import { authorizedRoutes, unauthorizedRoutes } from '../../routes'

type Props = {
  items: {
    path: string
    title: string | JSX.Element
    icon: JSX.Element
  }[]
}

export const AppShell: React.FunctionComponent<Props> = ({ items }) => {
  const { token, admin, removeAuth } = useAuth()
  const isAuthorized: boolean = token !== ''
  const routes = isAuthorized ? authorizedRoutes : unauthorizedRoutes

  return (
    <Layout className={styles.layout}>
      <Header
        isAuthorized={isAuthorized}
        username={admin.email}
        removeAuth={removeAuth}
      />
      <Page items={items} isAuthorized={isAuthorized}>
        <Router isAuthorized={isAuthorized} routes={routes} />
      </Page>
    </Layout>
  )
}
