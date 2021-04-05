import React from 'react'
import { notification } from 'antd'
import { FormikHelpers } from 'formik'
import { CreateChannelRequest as FormData, useCreateChannel} from "../../../services/api/channels";
import { isValidationError } from '../../../services/api/client/types'
import { View } from './View'

export const Container: React.FunctionComponent = () => {
  const [createChannel, { error }] = useCreateChannel()

  const onSubmit = (
    form: FormData,
    { setErrors }: FormikHelpers<FormData>
  ) => {
    return createChannel(form)
      .then(() => {
        notification.success({
          message: 'Канал успешно добавлен',
          duration: 3,
        })
      })
      .catch((error) => {
        notification.error({
          message: 'Возникли ошибки при добавлении канала',
          duration: 3,
        })
        if (isValidationError(error)) {
          setErrors(error.fieldErrors)
        }
      })
  }

  return (
    <View
      initialValues={{
        name: ''
      }}
      onSubmit={onSubmit}
    />
  )
}
