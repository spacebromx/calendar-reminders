export const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const actions = {
  UPDATE_DATE: "UPDATE_DATE",
  CREATE_REMINDER: "CREATE_REMINDER",
  SAVE_REMINDER: "SAVE_REMINDER",
  LOAD_REMINDER: "LOAD_REMINDER",
  EDIT_REMINDER: "EDIT_REMINDER",
  CLEAN_CURRENT_REMINDER: "CLEAN_CURRENT_REMINDER",
  DELETE_ALL_REMINDERS: "DELETE_ALL_REMINDERS",
  DELETE_REMINDER: "DELETE_REMINDER",
};

export const TIME_TRAVEL_DIRECTIONS = {
  CENTER: "CENTER",
  FORWARD: "FORWARD",
  BACK: "BACK",
};

export const DATE_FORMAT_OPTIONS = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

export const TIME_FRAMES = {
  PRIOR: "PRIOR",
  CURRENT: "CURRENT",
  LATER: "LATER",
};

export const API_URL = "https://api.openweathermap.org/data/2.5/weather";
