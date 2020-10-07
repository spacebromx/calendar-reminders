import React, {useContext} from 'react';
import addMonths from 'date-fns/addMonths'
import {GlobalContext} from "../Store";
import {getMonthName} from "../utils";
import {actions, TIME_TRAVEL_DIRECTIONS} from "../constants";

const Navigation = () => {
  const {state: {month, year}, dispatch} = useContext(GlobalContext)
  const currentMonth = getMonthName({month, year})

  function changeDate({day, month, year}) {
    dispatch({
      type: actions.UPDATE_DATE,
      payload: {
        year,
        month,
        day
      }
    })
  }

  function handleMonthClick(e, direction) {
    let newDate

    if (direction === TIME_TRAVEL_DIRECTIONS.BACK) {
      newDate = addMonths(new Date(year, month, 1), -1)
    } else if (direction === TIME_TRAVEL_DIRECTIONS.FORWARD) {
      newDate = addMonths(new Date(year, month, 1), 1)
    } else {
      newDate = new Date()
    }

    changeDate({
      year: newDate.getFullYear(),
      month: newDate.getMonth(),
      day: 1
    })
  }

  return (
    <div className="flex items-center justify-between py-2 px-6">
      <div>
        <span className="text-lg font-bold text-gray-800">{currentMonth}</span>
        <span className="ml-1 text-lg text-gray-600 font-normal">{year}</span>
      </div>
      <div className="border rounded-lg inline-flex">
        <button
          type="button"
          className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center"
          onClick={e => handleMonthClick(e, TIME_TRAVEL_DIRECTIONS.BACK)}
        >
          <svg
            className="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button
          className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center text-xs"
          onClick={e => handleMonthClick(e, TIME_TRAVEL_DIRECTIONS.CENTER)}
        >
          Today
        </button>
        <button
          type="button"
          className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1"
          onClick={e => handleMonthClick(e, TIME_TRAVEL_DIRECTIONS.FORWARD)}
        >
          <svg
            className="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
