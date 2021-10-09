import React from 'react'
import { Tag } from 'antd'
import styles from './styles.module.css'
import { isEmpty, isNumber } from 'lodash'

const EMPTY_PROP_MESSAGE = 'N/A'
const EMPTY_PROP_COLOR = '#ffbb99'

type Props = {
  label: string
  onTagClick?: () => void
  color: string
}

export const View: React.FunctionComponent<Props> = ({
  label,
  onTagClick,
  color,
  children,
}) => {
  return (
    <div className={styles.block}>
      <Tag color={color} className={styles.label} onClick={onTagClick}>
        {label}
      </Tag>
      {isNumber(children) || !isEmpty(children) ? (
        children
      ) : (
        <Tag color={EMPTY_PROP_COLOR} className={styles.naTag}>
          {EMPTY_PROP_MESSAGE}
        </Tag>
      )}
    </div>
  )
}
