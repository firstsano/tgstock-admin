import React from 'react'
import { Tag, Tooltip } from 'antd'
import styles from './styles.module.css'

const EMPTY_PROP_MESSAGE = 'N/A'

type Props = {
  label: string
  color?: string
}

export const Property: React.FunctionComponent<Props> = ({
  label,
  children,
  color = 'default',
}) => {
  return (
    <div className={styles.block}>
      <Tooltip title="Нажмите для копирования данных">
        <Tag color={color}>{label}</Tag>
      </Tooltip>
      {children ? (
        children
      ) : (
        <Tag color="#ffbb99" className={styles.naTag}>
          {EMPTY_PROP_MESSAGE}
        </Tag>
      )}
    </div>
  )
}
