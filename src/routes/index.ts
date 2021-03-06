import React from 'react'

import SignIn from './auth/SignIn'

import CreateChannel from './channels/Create'
import ChannelList from './channels/List'
import ShowChannel from './channels/Show'
import UpdateChannel from './channels/Update'

import CategoryList from './categories/List'

import Settings from './settings/Index'

import AgentList from './agents/List'
import CreateAgent from './agents/Create'

export type RouteOption = {
  name: string
  exact: boolean
  strict: boolean
  path: string
  component: React.ComponentType
}

export const defaultRoute: RouteOption = Settings

export const unauthorizedRoutes: RouteOption[] = [SignIn]

export const authorizedRoutes: RouteOption[] = [
  Settings,
  CreateChannel,
  ChannelList,
  ShowChannel,
  UpdateChannel,
  CategoryList,
  AgentList,
  CreateAgent,
]
