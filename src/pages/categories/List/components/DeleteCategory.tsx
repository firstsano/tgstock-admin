import React from 'react'
import { notification, Popconfirm } from 'antd'
import { CategoryListItem } from '../../../../services/api/categories'
import { useDeleteCategory } from '../../../../services/api/categories'

type Props = {
  category: CategoryListItem
  removeCategory: (deleteCategoryById: () => Promise<void>) => Promise<void>
}

export const DeleteCategory: React.FunctionComponent<Props> = ({
  category,
  removeCategory,
  children,
}) => {
  const [deleteCategory] = useDeleteCategory(category.id)

  const sendDeleteCategory = () => {
    return removeCategory(deleteCategory).catch((error) => {
      notification.error({
        message: error.message,
        duration: 3,
      })
    })
  }

  return (
    <Popconfirm
      placement="top"
      title="Вы действительно хотите удалить категорию"
      onConfirm={sendDeleteCategory}
      okText="Да"
      cancelText="Нет"
    >
      {children}
    </Popconfirm>
  )
}
