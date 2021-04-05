import React, { createContext, useContext, useState } from 'react'

type Admin = {
  id: string
  email: string
}

type Context = {
  token: string
  admin: Admin
  setAuth: (token: string, admin: Admin) => void
  removeAuth: () => void
}

const emptyAdmin: Admin = {
  id: '',
  email: '',
}

const AuthContext = createContext<Context>({
  token: '',
  admin: emptyAdmin,
  setAuth: () => {},
  removeAuth: () => {},
})

const TOKEN_KEY = 'TgStockAdminToken'
const USER_KEY = 'TgStockAAdminUser'

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const restoredToken = localStorage.getItem(TOKEN_KEY)
  const restoredUser = localStorage.getItem(USER_KEY)

  const [token, setToken] = useState<string>(restoredToken || '')
  const [admin, setAdmin] = useState<Admin>(
    restoredUser ? JSON.parse(restoredUser) : emptyAdmin
  )

  const setAuth = (token: string, admin: Admin) => {
    setToken(token)
    setAdmin(admin)
    localStorage.setItem('TgStockAdminToken', token)
    localStorage.setItem('TgStockAAdminUser', JSON.stringify(admin))
  }

  const removeAuth = () => setAuth('', emptyAdmin)

  return (
    <AuthContext.Provider value={{ token, admin, setAuth, removeAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
