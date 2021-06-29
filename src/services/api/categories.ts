import { useAPI } from './client/useAPI'
import { ListResponse, PaginationRequest } from './client/types'

export type CategoryListItem = {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}
type CategoryListRequest = PaginationRequest
export const defaultCategoryListRequest: CategoryListRequest = {
  page: 1,
  perPage: 1000,
}
export type CategoryListResponse = ListResponse<CategoryListItem>
export const useCategories = () => {
  return useAPI<CategoryListResponse, CategoryListRequest>(
    'GET',
    '/categories',
    {
      withToken: true,
    }
  )
}

export type CreateCategoryRequest = {
  name: string
}
export type CreateCategoryResponse = {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}
export const useCreateCategory = () => {
  return useAPI<CreateCategoryResponse, CreateCategoryRequest>(
    'POST',
    '/categories',
    {
      withToken: true,
    }
  )
}

export type UpdateCategoryRequest = {
  name: string
}
export type UpdateCategoryResponse = {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}
export const useUpdateCategory = (id: string) => {
  return useAPI<UpdateCategoryResponse, UpdateCategoryRequest>(
    'PATCH',
    `/categories/${id}`,
    {
      withToken: true,
    }
  )
}

export const useDeleteCategory = (id: string) => {
  return useAPI<undefined, undefined>('DELETE', `/categories/${id}`, {
    withToken: true,
  })
}
