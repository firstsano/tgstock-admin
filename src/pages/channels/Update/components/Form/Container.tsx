import React, { useEffect } from 'react'
import {
  ShowChannel,
  UpdateChannelRequest,
  UpdateChannelResponse,
} from '../../../../../services/api/channels'
import {
  CategoryListItem,
  defaultCategoryListRequest,
  useCategories,
} from '../../../../../services/api/categories'
import { View } from './View'
import { AsyncStates } from '../../../../../components'
import { FormikHelpers } from 'formik'
import { isValidationError } from '../../../../../services/api/client/types'

type Props = {
  channel: ShowChannel
  updateChannel: (
    form: UpdateChannelRequest
  ) => Promise<UpdateChannelResponse | void>
}

export const Container: React.FunctionComponent<Props> = ({
  channel,
  updateChannel,
}) => {
  const [getCategories, { error, response, isLoading }] = useCategories()

  useEffect(() => {
    getCategories(defaultCategoryListRequest)
  }, [getCategories])

  const sendUpdateChannel = (
    channel: UpdateChannelRequest,
    { setErrors }: FormikHelpers<UpdateChannelRequest>
  ) => {
    return updateChannel(channel).catch((error) => {
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
        return (
          <View
            channel={channel}
            categories={categories}
            onSubmit={sendUpdateChannel}
          />
        )
      }}
    />
  )
}
