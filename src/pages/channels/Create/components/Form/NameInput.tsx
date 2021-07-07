import React, { useState } from 'react'
import { Input, InputProps } from 'antd'
import { useFormikContext } from 'formik'

type Props = InputProps & {
  name: string
}

export const NameInput: React.FunctionComponent<Props> = (props) => {
  const { name, ...otherProps } = props
  const { values, setFieldValue } = useFormikContext<any>()
  const [wrappedValue, setWrappedValue] = useState<string>(values[name])

  const handleChange = (event: any): void => {
    const value: string = event.target.value as string
    setWrappedValue(value)
    setFieldValue(name, setupName(value))
  }

  const setupName = (value: string): string | undefined => {
    return value.split('/').pop()
  }

  return <Input value={wrappedValue} onChange={handleChange} {...otherProps} />
}
