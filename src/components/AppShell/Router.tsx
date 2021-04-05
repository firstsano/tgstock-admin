import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { NotFound } from '../../pages/NotFound'
import { signInPath } from '../../routes/paths'
import { RouteOption, defaultRoute } from '../../routes'

type Props = {
  isAuthorized: boolean
  routes: RouteOption[]
}

export const Router: React.FunctionComponent<Props> = ({
  isAuthorized,
  routes,
}) => {
  return (
    <Switch>
      {routes.map(({ name, path, exact, strict, component }) => (
        <Route key={name} {...{ path, exact, strict, component }} />
      ))}
      {!isAuthorized && <Redirect to={signInPath()} />}
      <Route
        key="DefaultComponent"
        path="/"
        exact
        strict
        component={defaultRoute.component}
      />
      <Route key="NotFound" component={NotFound} />
    </Switch>
  )
}
