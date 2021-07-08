import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'
import { RouteOption } from '../../routes'
import { signInPath } from '../../routes/paths'

type Props = RouteOption & {
  isAuthorized: boolean
}

export const AuthorizedRoute: React.FunctionComponent<Props> = (props) => {
  const location = useLocation()
  const {
    name,
    isAuthorized,
    component: RenderedComponent,
    ...routeProps
  } = props

  return (
    <Route
      key={name}
      {...routeProps}
      render={() =>
        isAuthorized ? (
          <RenderedComponent />
        ) : (
          <Redirect
            to={{ pathname: signInPath(), state: { from: location.pathname } }}
          />
        )
      }
    />
  )
}
