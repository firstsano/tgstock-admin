import React, { useEffect } from 'react'
import {
  CreateChannelRequest,
  CreateChannelResponse,
} from '../../../../../services/api/channels'
import {
  CategoryListItem,
  defaultCategoryListRequest,
  useCategories,
} from '../../../../../services/api/categories'
import { View } from './View'
import { AsyncStates } from '../../../../../components'
import { FormikHelpers } from 'formik'
import {
  isValidationError,
  isNotFoundError,
} from '../../../../../services/api/client/types'

type Props = {
  createChannel: (
    form: CreateChannelRequest
  ) => Promise<CreateChannelResponse | void>
}

export const Container: React.FunctionComponent<Props> = ({
  createChannel,
}) => {
  const [getCategories, { error, response, isLoading }] = useCategories()

  useEffect(() => {
    getCategories(defaultCategoryListRequest)
  }, [getCategories])

  const sendCreateChannel = (
    channel: CreateChannelRequest,
    { setErrors }: FormikHelpers<CreateChannelRequest>
  ) => {
    return createChannel(channel).catch((error) => {
      if (isNotFoundError(error)) {
        setErrors({
          name: 'Канал не был найден в телеграме',
        })
      }
      if (isValidationError(error)) {
        setErrors(error.fieldErrors)
      }
    })
  }

  return (
    <AsyncStates<CategoryListItem[]>
      isLoading={isLoading}
      error={error}
      errorMessage="Не удалось загрузить форму"
      reload={() => getCategories(defaultCategoryListRequest)}
      response={response}
      renderData={(categories) => {
        return <View categories={categories} onSubmit={sendCreateChannel} />
      }}
    />
  )
}
