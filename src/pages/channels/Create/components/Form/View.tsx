import React from 'react'
import { Col, Divider, Row } from 'antd'
import { Form, FormItem, SubmitButton, Select } from 'formik-antd'
import { Formik } from 'formik'
import {
  CreateChannelRequest as FormData,
  CreateChannelResponse,
} from '../../../../../services/api/channels'
import { CategoryListItem } from '../../../../../services/api/categories'
import { NameInput } from './NameInput'
import { Hint } from '../../../../../components/Hint'

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
            <FormItem
              name="name"
              label={
                <Hint message="В виде jobGeeks или https://t.me/jobGeeks">
                  Название
                </Hint>
              }
              required
            >
              <NameInput name="name" placeholder="Название" />
            </FormItem>
          </Col>
        </Row>

        <Row gutter={[32, 0]}>
          <Col span={12}>
            <FormItem name="categoriesIds" label="Категории">
              <Select
                mode="multiple"
                name="categoriesIds"
                placeholder="Выберите категории"
                optionLabelProp="label"
                optionFilterProp="label"
              >
                {categories.map((category) => (
                  <Option
                    key={category.id}
                    label={category.name}
                    value={category.id}
                  >
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
