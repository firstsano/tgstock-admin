import React from 'react'
import { Row, Col } from 'antd'
import { Formik } from 'formik'
import { Form, FormItem, Input, SubmitButton } from 'formik-antd'
import { SignInRequest as FormData } from '../../../services/api/auth'

const initialValues: FormData = {
  email: '',
  password: '',
}
type Props = {
  onSubmit: (form: FormData, ...args: any[]) => void
}

export const View: React.FunctionComponent<Props> = ({ onSubmit }) => {
  return (
    <Row justify="center">
      <Col span={7}>
        <h1>Вход</h1>

        <Formik<FormData> initialValues={initialValues} onSubmit={onSubmit}>
          <Form layout="vertical" size="large">
            <FormItem name="email" label="Электронная почта">
              <Input name="email" />
            </FormItem>

            <FormItem name="password" label="Пароль">
              <Input.Password name="password" type="password" />
            </FormItem>

            <SubmitButton>Войти</SubmitButton>
          </Form>
        </Formik>
      </Col>
    </Row>
  )
}
