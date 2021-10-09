import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { NotFound } from '../../pages/NotFound'
import {
  defaultRoute,
  authorizedRoutes,
  unauthorizedRoutes,
} from '../../routes'
import { useAuth } from '../../services/auth'
import { AuthorizedRoute } from './AuthorizedRoute'
import { UnauthorizedRoute } from './UnauthorizedRoute'

export const Router: React.FunctionComponent = () => {
  const { token } = useAuth()
  const isAuthorized: boolean = token !== ''

  return (
    <Switch>
      {authorizedRoutes.map((route) => (
        <AuthorizedRoute
          key={route.name}
          {...route}
          isAuthorized={isAuthorized}
        />
      ))}
      {unauthorizedRoutes.map((route) => (
        <UnauthorizedRoute
          key={route.name}
          {...route}
          isAuthorized={isAuthorized}
        />
      ))}
      <AuthorizedRoute
        name="DefaultComponent"
        path="/"
        exact
        strict
        component={defaultRoute.component}
        isAuthorized={isAuthorized}
      />
      <Route key="NotFound" component={NotFound} />
    </Switch>
  )
}
