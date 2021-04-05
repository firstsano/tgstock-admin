import React from 'react'

import SignIn from './auth/SignIn'

import Settings from './settings/Index'

export type RouteOption = {
  name: string
  exact: boolean
  strict: boolean
  path: string
  component: React.ComponentType
}

export const defaultRoute: RouteOption = Settings

export const unauthorizedRoutes: RouteOption[] = [SignIn]

export const authorizedRoutes: RouteOption[] = [Settings]
