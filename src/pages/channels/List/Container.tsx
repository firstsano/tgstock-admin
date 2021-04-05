import React, { useEffect } from 'react'
import { useChannels } from "../../../services/api/channels";
import { View } from './View'


export const Container: React.FunctionComponent = () => {
  const [getChannels, { response, isLoading }] = useChannels()

  useEffect(() => {
    getChannels()
  }, [getChannels])

  if (response) {
    return <View
      channels={response.data}
      meta={response?.meta}
      isLoading={isLoading}
    />
  }

  return <>123</>
}
