import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { RouteOption } from '../../routes'
import { defaultPath } from '../../routes/paths'

type Props = RouteOption & {
  isAuthorized: boolean
}

export const UnauthorizedRoute: React.FunctionComponent<Props> = (props) => {
  const {
    name,
    component: RenderedComponent,
    isAuthorized,
    ...routeProps
  } = props

  return (
    <Route
      key={name}
      {...routeProps}
      render={() =>
        !isAuthorized ? <RenderedComponent /> : <Redirect to={defaultPath()} />
      }
    />
  )
}
