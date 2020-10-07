import React, {useReducer, createContext} from 'react'
import {actions} from "./constants";

const now = new Date()

const initialState = {
  day: now.getDay(),
  month: now.getMonth(),
  year: now.getFullYear()
}

export const GlobalContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_DATE:
      const {month, year, day = 1} = action.payload
      return {...state, year, month, day}
    default:
      return state
  }
}

export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <GlobalContext.Provider value={{state, dispatch}}>
    {children}
  </GlobalContext.Provider>
}
