import React from 'react'
import { Formik, FormikHelpers } from 'formik'
import { Form, FormItem, Input, SubmitButton } from 'formik-antd'
import { CreateCategoryRequest as FormData } from '../../../../services/api/categories'
import { isValidationError } from '../../../../services/api/client/types'
import { TagOutlined } from '@ant-design/icons'

type Props = {
  addCategory: (category: FormData) => Promise<void>
}

export const AddCategory: React.FunctionComponent<Props> = ({
  addCategory,
}) => {
  const onSubmit = (
    category: FormData,
    { setErrors, resetForm }: FormikHelpers<FormData>
  ) => {
    return addCategory(category)
      .then(() => {
        resetForm()
      })
      .catch((error) => {
        if (isValidationError(error)) {
          setErrors(error.fieldErrors)
        }
      })
  }

  return (
    <Formik<FormData> initialValues={{ name: '' }} onSubmit={onSubmit}>
      <Form size="middle" style={{ marginBottom: 15 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FormItem name="name" style={{ flexGrow: 1, marginRight: 20 }}>
            <Input name="name" placeholder="Название категории" />
          </FormItem>

          <SubmitButton>
            <TagOutlined />
            Добавить категорию
          </SubmitButton>
        </div>
      </Form>
    </Formik>
  )
}
