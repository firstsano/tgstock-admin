import React, { createContext, useContext } from 'react'

type Context = {
  isSecured: boolean
}

const SecurityContext = createContext<Context>({
  isSecured: false,
})

export const SecurityProvider: React.FunctionComponent = ({ children }) => {
  const isSecured = window.isSecureContext

  return (
    <SecurityContext.Provider value={{ isSecured }}>
      {children}
    </SecurityContext.Provider>
  )
}

export const useSecurity = () => {
  return useContext(SecurityContext)
}
