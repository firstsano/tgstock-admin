import React from 'react'
import { Result, Button } from 'antd'
import { defaultPath } from '../routes/paths'

export const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" href={defaultPath()}>
          Back Home
        </Button>
      }
    />
  )
}
