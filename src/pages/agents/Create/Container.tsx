import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  CreateAgentRequest,
  useCreateAgent,
  useAuthKeys,
} from '../../../services/api/agents'
import { View } from './View'
import { agentsPath } from '../../../routes/paths'
import { isValidationError } from '../../../services/api/client/types'
import { FormikHelpers } from 'formik'
import { notify_success, notify_error } from '../../../utils/notifications'
import { isEmpty } from 'lodash'

export const Container: React.FunctionComponent = () => {
  const history = useHistory()
  const [getAuthKeys, { response }] = useAuthKeys()
  const [createAgent] = useCreateAgent()

  useEffect(() => {
    getAuthKeys()
  }, [getAuthKeys])

  const prepareRequestParams = (
    params: CreateAgentRequest
  ): CreateAgentRequest => {
    const digitizedPhone: string = params.phoneNumber.replace(/\D/g, '')
    return { phoneNumber: digitizedPhone }
  }

  const sendCreateAgent = (
    formParams: CreateAgentRequest,
    { setErrors }: FormikHelpers<CreateAgentRequest>
  ) => {
    return createAgent(prepareRequestParams(formParams))
      .then(() => {
        notify_success('Агент успешно добавлен')
        history.push(agentsPath())
      })
      .catch((error) => {
        if (isValidationError(error)) {
          isEmpty(error.fieldErrors)
            ? notify_error(error.message)
            : setErrors(error.fieldErrors)
        }

        throw error
      })
  }

  const availableAuthKeys = response?.data.map((key) => key.phoneNumber) || []

  return <View createAgent={sendCreateAgent} authKeys={availableAuthKeys} />
}
