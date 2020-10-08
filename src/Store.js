import React, {useReducer, createContext} from 'react'
import {actions} from "./constants";

const now = new Date()

const initialState = {
  day: now.getDate(),
  month: now.getMonth(),
  year: now.getFullYear(),
  reminderData: {
    date: new Date()
  },
  reminders: [
    {
      city: "",
      color: "#e53e3e",
      date: "Oct 7, 2020",
      description: "1",
      time: "1:00 PM"
    }
  ]
}

export const GlobalContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_DATE:
      const {month, year, day = 1} = action.payload
      return {...state, year, month, day}
    case actions.CREATE_REMINDER:
      const {date} = action.payload
      return {...state, reminderData: {...state.reminderData, date}}
    case actions.SAVE_REMINDER:
      return {...state, reminders: [...state.reminders, {...action.payload}]}
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
