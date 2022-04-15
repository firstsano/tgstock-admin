import React from 'react'
import { AgentListItem } from '../../../services/api/agents'
import { Button, Col, Divider, Row, Table } from 'antd'
import { BoolLabel } from '../../../components'
import { createAgentPath } from '../../../routes/paths'
import { PlusOutlined } from '@ant-design/icons'

type Props = {
  agents?: AgentListItem[]
  isLoading: boolean
}

export const View: React.FunctionComponent<Props> = ({ agents, isLoading }) => {
  return (
    <>
      <Row>
        <Col span={12}>
          <h2>Агенты</h2>
        </Col>
        <Col span={12}>
          <Button
            href={createAgentPath()}
            type="primary"
            style={{ float: 'right' }}
          >
            <PlusOutlined />
            Добавить агента
          </Button>
        </Col>
      </Row>

      <Divider />

      <Table
        dataSource={agents}
        columns={[
          {
            title: 'Номер телефона',
            dataIndex: 'phoneNumber',
          },
          {
            title: 'Агент доступен',
            render: (_, agent) => <BoolLabel value={agent.available} />,
          },
          {
            title: 'Создан',
            dataIndex: 'createdAt',
          },
        ]}
        pagination={false}
        locale={{ emptyText: 'Агентов не найдено' }}
        loading={isLoading}
        rowKey={(agent) => agent.id}
      />
    </>
  )
}
