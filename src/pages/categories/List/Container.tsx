import React, { useEffect } from 'react'
import {
  UpdateCategoryResponse,
  useCategories,
  useCreateCategory,
} from '../../../services/api/categories'
import {
  CreateCategoryRequest,
  CategoryListItem,
} from '../../../services/api/categories'
import { View } from './View'
import { notification } from 'antd'
import { AsyncStates } from '../../../components'
import { defaultCategoryListRequest } from '../../../services/api/categories'

export const Container: React.FunctionComponent = () => {
  const [getCategories, { error, response, isLoading }] = useCategories()
  const [createCategory] = useCreateCategory()

  useEffect(() => {
    getCategories(defaultCategoryListRequest)
  }, [getCategories])

  const addCategory = (category: CreateCategoryRequest): Promise<void> => {
    return createCategory(category)
      .then(() => {
        notification.success({
          message: 'Категория успешно создана',
          duration: 3,
        })
        getCategories(defaultCategoryListRequest)
      })
      .catch((error) => {
        notification.error({
          message: 'Ошибка при создании категории',
          duration: 3,
        })
        throw error
      })
  }

  const removeCategory = (
    deleteCategoryById: () => Promise<void>
  ): Promise<void> => {
    return deleteCategoryById()
      .then(() => {
        notification.success({
          message: 'Категория успешно удалена',
          duration: 3,
        })
        getCategories(defaultCategoryListRequest)
      })
      .catch((error) => {
        notification.error({
          message: 'Ошибка при удалении категории',
          duration: 3,
        })
        throw error
      })
  }

  const updateCategory = (
    updateCategoryById: () => Promise<UpdateCategoryResponse>
  ): Promise<void> => {
    return updateCategoryById()
      .then(() => {
        notification.success({
          message: 'Категория успешно обновлена',
          duration: 3,
        })
        getCategories(defaultCategoryListRequest)
      })
      .catch((error) => {
        notification.error({
          message: 'Ошибка при обновлении категории',
          duration: 3,
        })
        throw error
      })
  }

  return (
    <AsyncStates<CategoryListItem[]>
      isLoading={isLoading}
      error={error}
      errorMessage="Не удалось загрузить категории"
      reload={() => getCategories(defaultCategoryListRequest)}
      response={response}
      renderData={(categories) => {
        return (
          <View
            addCategory={addCategory}
            removeCategory={removeCategory}
            updateCategory={updateCategory}
            categories={categories}
          />
        )
      }}
    />
  )
}
