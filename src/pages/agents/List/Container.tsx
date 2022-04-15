import React, { useEffect } from 'react'
import { useAgents } from '../../../services/api/agents'
import { View } from './View'

export const Container: React.FunctionComponent = () => {
  const [getAgents, { response, isLoading }] = useAgents()

  useEffect(() => {
    getAgents()
  }, [getAgents])

  return <View agents={response?.data} isLoading={isLoading} />
}
