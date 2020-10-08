import React, {useReducer, createContext} from 'react'
import uniqid from 'uniqid'
import {actions} from "./constants";
import {getReminderById, parseAndFormatDate} from "./utils";

const now = new Date()

const initialState = {
  day: now.getDate(),
  month: now.getMonth(),
  year: now.getFullYear(),
  reminderData: {
    date: new Date()
  },
  currentReminder: null,
  reminders: [
    {
      id: 'asdajk',
      city: "",
      color: "#e53e3e",
      date: "Oct 7, 2020",
      description: "💥 This is an example reminder",
      time: "1:00 PM"
    },
    {
      id: 'asdajk1',
      city: "",
      color: "#cdcdcd",
      date: "Oct 7, 2020",
      description: "This is another example reminder",
      time: "4:00 PM"
    },
    {
      id: 'asdajk2',
      city: "",
      color: "#1d1d1d",
      date: "Oct 7, 2020",
      description: "This is yet another example reminder",
      time: "3:00 PM"
    },
    {
      id: 'asdajk3',
      city: "",
      color: "#e53e3e",
      date: "Oct 7, 2020",
      description: "This is an example reminder",
      time: "1:00 PM"
    },
    {
      id: 'asdajk4',
      city: "",
      color: "#cdcdcd",
      date: "Oct 7, 2020",
      description: "This is another example reminder",
      time: "1:00 PM"
    },
    {
      id: 'asdajk5',
      city: "",
      color: "#1d1d1d",
      date: "Oct 7, 2020",
      description: "This is yet another example reminder",
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
    case actions.LOAD_REMINDER:
      const currentReminder = getReminderById(state.reminders, action.payload.id)
      return {...state, currentReminder: currentReminder[0]}
    case actions.SAVE_REMINDER:
      return {...state, reminders: [...state.reminders, {...action.payload, id: uniqid()}]}
    case actions.EDIT_REMINDER:
      const tmpIndex = state.reminders.findIndex(item => item.id === action.payload.id)
      let newReminders = [...state.reminders]
      newReminders[tmpIndex] = action.payload
      return {...state, reminders: newReminders}
    case actions.CLEAN_CURRENT_REMINDER:
      return {...state, currentReminder: null}
    case actions.DELETE_ALL_REMINDERS:
      const newDate = parseAndFormatDate(action.payload)
      const filteredItems = [...state.reminders].filter(item => item.date !== newDate)
      return {...state, reminders: filteredItems}
    case actions.DELETE_REMINDER:
      let preservedReminders = [...state.reminders].filter(item => item.id !== action.payload)
      return {...state, reminders: preservedReminders}
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
