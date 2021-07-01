import React from 'react'
import { notification } from 'antd'
import { View } from './View'
import { useSecurity } from '../../services/security'

type Props = {
  label: string
  copiableValue?: string
  color?: string
}

export const Container: React.FunctionComponent<Props> = ({
  label,
  color = 'default',
  copiableValue,
  children,
}) => {
  const { isSecured: copyAvailable } = useSecurity()

  const copyValue = copyAvailable
    ? () => {
        const value: string | undefined = copiableValue || children?.toString()
        if (!value) return

        navigator.clipboard.writeText(value)
        notification.info({
          message: 'Данные скопированы',
          duration: 3,
        })
      }
    : undefined

  return (
    <View label={label} color={color} onTagClick={copyValue}>
      {children}
    </View>
  )
}
