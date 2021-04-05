import React from 'react'
import { Row, Col } from 'antd'
import { Formik } from 'formik'
import { Form, FormItem, Input, SubmitButton } from 'formik-antd'
import { SignInRequest } from '../../../services/api/auth'

type Form = SignInRequest
type Props = {
  initialValues: Form
  onSubmit: (form: Form, ...args: any[]) => void
}

export const View: React.FunctionComponent<Props> = ({
  initialValues,
  onSubmit,
}) => {
  return (
    <Row justify="center">
      <Col span={7}>
        <h1>Вход</h1>

        <Formik<Form> initialValues={initialValues} onSubmit={onSubmit}>
          <Form layout="vertical" size="large">
            <FormItem name="email" label="Электронная почта">
              <Input name="email" />
            </FormItem>

            <FormItem name="password" label="Пароль">
              <Input name="password" type="password" />
            </FormItem>

            <SubmitButton>Войти</SubmitButton>
          </Form>
        </Formik>
      </Col>
    </Row>
  )
}
