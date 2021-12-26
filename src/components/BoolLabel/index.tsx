import React from 'react'
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons'
import styles from './styles.module.css'

type Props = {
  value: boolean
}

export const BoolLabel: React.FunctionComponent<Props> = ({ value }) => {
  return value ? (
    <CheckCircleFilled className={styles.featureEnabled} />
  ) : (
    <CloseCircleFilled className={styles.featureDisabled} />
  )
}
