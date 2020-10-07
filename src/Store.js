import React, {useReducer, createContext} from 'react'
import {actions} from "./constants";

const now = new Date()

const initialState = {
  day: now.getDate(),
  month: now.getMonth(),
  year: now.getFullYear(),
  reminderData: {
    day: 0,
    month: 0,
    year: ''
  }
}

export const GlobalContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_DATE:
      const {month, year, day = 1} = action.payload
      return {...state, year, month, day}
    case actions.CREATE_REMINDER:
      const {newMonth, newYear, newDay } = action.payload
      return {...state, reminderData: {...state.reminderData, day: newDay, month: newMonth, year: newYear}}
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
