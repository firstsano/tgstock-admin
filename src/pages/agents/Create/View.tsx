import React, { useMemo } from 'react'
import { Col, Divider, Row, Typography } from 'antd'
import { CreateAgentRequest } from '../../../services/api/agents'
import { Formik, FormikHelpers } from 'formik'
import { Form, FormItem, SubmitButton } from 'formik-antd'
import { MaskedInput } from 'antd-mask-input'
import { isEmpty } from 'lodash'

const { Text } = Typography

type Props = {
  authKeys: string[]
  createAgent: (
    params: CreateAgentRequest,
    helpers: FormikHelpers<CreateAgentRequest>
  ) => void
}

export const View: React.FunctionComponent<Props> = ({
  createAgent,
  authKeys,
}) => {
  const mask = useMemo(() => [{ mask: '+0(000)-000-00-00', lazy: false }], [])

  return (
    <>
      <h2>Добавить агента</h2>

      <Divider />

      <Formik<CreateAgentRequest>
        initialValues={{ phoneNumber: '' }}
        onSubmit={createAgent}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form layout="vertical" size="large">
            <Row gutter={[32, 0]}>
              <Col span={12}>
                <FormItem name="phoneNumber" label="Номер телефона">
                  <MaskedInput
                    mask={mask}
                    name="phoneNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                  />
                  {!isEmpty(authKeys) && (
                    <Text
                      type="secondary"
                      style={{ display: 'block', marginTop: 10, fontSize: 12 }}
                    >
                      Возможные агенты: {authKeys.join(', ')}
                    </Text>
                  )}
                </FormItem>
              </Col>
            </Row>

            <Divider />

            <SubmitButton>Сохранить</SubmitButton>
          </Form>
        )}
      </Formik>
    </>
  )
}
