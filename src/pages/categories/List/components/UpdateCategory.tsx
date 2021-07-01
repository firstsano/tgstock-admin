import React, { useState } from 'react'
import { Formik, FormikHelpers } from 'formik'
import { Form, FormItem, Input, SubmitButton } from 'formik-antd'
import {
  CategoryListItem,
  UpdateCategoryRequest as FormData,
  UpdateCategoryResponse,
  useUpdateCategory,
} from '../../../../services/api/categories'
import { isValidationError } from '../../../../services/api/client/types'
import { EditOutlined } from '@ant-design/icons'
import { Modal } from 'antd'

type Props = {
  category: CategoryListItem
  updateCategory: (
    updateCategoryById: () => Promise<UpdateCategoryResponse>
  ) => Promise<void>
}

export const UpdateCategory: React.FunctionComponent<Props> = ({
  children,
  category,
  updateCategory,
}) => {
  const [sendUpdateCategory] = useUpdateCategory(category.id)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const onSubmit = (
    category: FormData,
    { setErrors }: FormikHelpers<FormData>
  ) => {
    return updateCategory(() => sendUpdateCategory(category))
      .then(() => {
        setIsModalVisible(false)
      })
      .catch((error) => {
        if (isValidationError(error)) {
          setErrors(error.fieldErrors)
        }
      })
  }

  return (
    <>
      <span
        style={{ marginRight: 15, cursor: 'pointer' }}
        onClick={() => setIsModalVisible(true)}
      >
        {children}
      </span>

      <Modal
        title="Редактирование категории"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={false}
        destroyOnClose
      >
        <Formik<FormData> initialValues={category} onSubmit={onSubmit}>
          <Form size="middle">
            <FormItem name="name">
              <Input name="name" placeholder="Название категории" />
            </FormItem>

            <SubmitButton>
              <EditOutlined />
              Обновить категорию
            </SubmitButton>
          </Form>
        </Formik>
      </Modal>
    </>
  )
}
