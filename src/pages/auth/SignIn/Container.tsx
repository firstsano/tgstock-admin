import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from 'formik-antd'
import { useAuth } from '../../../services/auth'
import { SignInRequest, useSignIn } from '../../../services/api/auth'
import { defaultPath } from '../../../routes/paths'
import { View } from './View'
import { notification } from 'antd'
import { isValidationError } from '../../../services/api/client/types'
import { FormikHelpers } from 'formik'

type Form = SignInRequest

export const Container: React.FunctionComponent = () => {
  const history = useHistory()
  const { setAuth } = useAuth()
  const [signIn] = useSignIn()

  const onSubmit = (form: Form, { setErrors }: FormikHelpers<Form>) => {
    return signIn(form)
      .then(({ data }) => {
        setAuth(data.token, data.admin)
        history.push(defaultPath())
      })
      .catch((error) => {
        if (error && isValidationError(error)) {
          setErrors(error.fieldErrors)
          notification.error({
            message: 'Неправильная электронная почта или пароль',
            duration: 3,
          })
        }
      })
  }

  return <View onSubmit={onSubmit} />
}
