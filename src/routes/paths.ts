// Auth
export const signInPath = () => '/sign-in'

// Settings
export const settingsPath = () => '/settings'

// Channels
export const createChannelPath = () => '/channels/create'
export const channelsPath = () => '/channels'
export const channelPath = (id = ':id') => `/channels/${id}`
export const updateChannelPath = (id = ':id') => `/channels/${id}/update`

// Categories
export const categoriesPath = () => '/categories'

// Agents
export const agentsPath = () => '/agents'
export const createAgentPath = () => '/agents/create'

export const defaultPath = settingsPath
