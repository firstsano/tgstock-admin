import React from 'react'
import { Divider, Tag } from 'antd'
import { AddCategory, DeleteCategory, UpdateCategory } from './components'
import {
  CreateCategoryRequest,
  CategoryListItem,
  UpdateCategoryResponse,
} from '../../../services/api/categories'
import { CloseOutlined } from '@ant-design/icons'

type Props = {
  addCategory: (category: CreateCategoryRequest) => Promise<void>
  removeCategory: (deleteCategoryById: () => Promise<void>) => Promise<void>
  updateCategory: (
    updateCategoryById: () => Promise<UpdateCategoryResponse>
  ) => Promise<void>
  categories: CategoryListItem[]
}

export const View: React.FunctionComponent<Props> = ({
  addCategory,
  removeCategory,
  updateCategory,
  categories,
}) => {
  return (
    <>
      <h2> Категории </h2>
      <Divider />
      <AddCategory addCategory={addCategory} />
      {categories.map((category) => (
        <Tag key={category.id}>
          <UpdateCategory category={category} updateCategory={updateCategory}>
            {category.name}
          </UpdateCategory>
          <DeleteCategory category={category} removeCategory={removeCategory}>
            <CloseOutlined />
          </DeleteCategory>
        </Tag>
      ))}
    </>
  )
}
