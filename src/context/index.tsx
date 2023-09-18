import React, { useContext, createContext, useState} from "react"
const  StateContext = createContext()

export const StateContextProvider = ({ children }) =>{
  const [test, setTest] = useState<string>("adult")

  return (
    <StateContext.Provider value={{
      test,
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)