import React from 'react'
import { Col, Divider, Row } from 'antd'
import {
  Form,
  FormItem,
  Input,
  SubmitButton,
} from 'formik-antd'
import { Formik } from 'formik'
import { CreateChannelRequest as FormData } from "../../../services/api/channels";

type Props = {
  initialValues: FormData
  onSubmit: (form: FormData, ...args: any[]) => void
}

export const View: React.FunctionComponent<Props> = ({
 initialValues,
 onSubmit,
}) => {
  return (
    <Formik<FormData> initialValues={initialValues} onSubmit={onSubmit}>
      <Form layout="vertical" size="large">
        <Row gutter={[32, 0]}>
          <Col span={6}>
            <FormItem name="name" label="Название" required>
              <Input name="name" />
            </FormItem>
          </Col>
        </Row>

        <Divider />

        <SubmitButton>Сохранить</SubmitButton>
      </Form>
    </Formik>
  )
}
