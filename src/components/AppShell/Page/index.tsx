import React from 'react'
import { Menu } from './Menu'
import styles from './styles.module.css'
import { Layout, Affix } from 'antd'

type Props = {
  isAuthorized: boolean
  items: {
    path: string
    title: string | JSX.Element
    icon: JSX.Element
  }[]
}
const { Sider, Content } = Layout

export const Page: React.FunctionComponent<Props> = ({
  children,
  isAuthorized,
  items,
}) => {
  if (!isAuthorized) {
    return <Content className={styles.unauthorizedPage}>{children}</Content>
  }

  return (
    <Layout className={styles.authorizedPage}>
      <Affix>
        <Sider theme="light" className={styles.authorizedPageSider}>
          <Menu items={items} />
        </Sider>
      </Affix>
      <Content className={styles.authorizedPageContent}>{children}</Content>
    </Layout>
  )
}
