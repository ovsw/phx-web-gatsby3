import React, {useState} from 'react'

export const appContext = React.createContext()

const AppContextProvider = props => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <appContext.Provider value={{
      isMobileNavOpen,
      openMobileNav: () => setIsMobileNavOpen(true),
      closeMobileNav: () => setIsMobileNavOpen(false)
    }}>
      {props.children}
    </appContext.Provider>
  )
}

export default ({element}) => (
  <AppContextProvider>
    {element}
  </AppContextProvider>
)
