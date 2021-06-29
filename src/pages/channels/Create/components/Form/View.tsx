import React from 'react'
import { Col, Divider, Row } from 'antd'
import { Form, FormItem, Input, SubmitButton, Select } from 'formik-antd'
import { Formik } from 'formik'
import {
  CreateChannelRequest as FormData,
  CreateChannelResponse,
} from '../../../../../services/api/channels'
import { CategoryListItem } from '../../../../../services/api/categories'

const Option = Select.Option
type Props = {
  categories: CategoryListItem[]
  onSubmit: (
    form: FormData,
    ...args: any[]
  ) => Promise<CreateChannelResponse | void>
}

export const View: React.FunctionComponent<Props> = ({
  categories,
  onSubmit,
}) => {
  return (
    <Formik<FormData> initialValues={{ name: '' }} onSubmit={onSubmit}>
      <Form layout="vertical" size="large">
        <Row gutter={[32, 0]}>
          <Col>
            <FormItem name="name" label="Название" required>
              <Input name="name" />
            </FormItem>
          </Col>
        </Row>

        <Row gutter={[32, 0]}>
          <Col span={12}>
            <FormItem name="categoriesIds" label="Категории">
              <Select mode="tags" name="categoriesIds">
                {categories.map((category) => (
                  <Option key={category.id} value={category.id}>
                    {category.name}
                  </Option>
                ))}
              </Select>
            </FormItem>
          </Col>
        </Row>

        <Divider />

        <SubmitButton>Сохранить</SubmitButton>
      </Form>
    </Formik>
  )
}
