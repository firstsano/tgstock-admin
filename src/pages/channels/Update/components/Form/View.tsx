import React from 'react'
import { Col, Divider, Row } from 'antd'
import { Form, FormItem, SubmitButton, Select } from 'formik-antd'
import { Formik } from 'formik'
import {
  ShowChannel,
  UpdateChannelRequest as FormData,
  UpdateChannelResponse,
} from '../../../../../services/api/channels'
import { CategoryListItem } from '../../../../../services/api/categories'

const Option = Select.Option
type Props = {
  channel: ShowChannel
  categories: CategoryListItem[]
  onSubmit: (
    form: FormData,
    ...args: any[]
  ) => Promise<UpdateChannelResponse | void>
}

export const View: React.FunctionComponent<Props> = ({
  channel,
  categories,
  onSubmit,
}) => {
  return (
    <Formik<FormData>
      initialValues={{
        categoriesIds: channel.categories.map((category) => category.id),
      }}
      onSubmit={onSubmit}
    >
      <Form layout="vertical" size="large">
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
