import React, {useContext} from 'react';
import addMonths from 'date-fns/addMonths'
import {GlobalContext} from "../Store";
import {getMonthName} from "../utils";
import {actions} from "../constants";

const Navigation = () => {
  const {state: {month, year}, dispatch} = useContext(GlobalContext)
  const currentMonth = getMonthName({month, year})

  function handleMonthClick(e, previous) {
    const newDate = addMonths(new Date(year, month, 1), previous ? -1 : 1)

    dispatch({
      type: actions.UPDATE_DATE,
      payload: {
        year: newDate.getFullYear(),
        month: newDate.getMonth(),
        day: 1
      }
    })
  }

  return (
    <div className="flex items-center justify-between py-2 px-6">
      <div>
        <span className="text-lg font-bold text-gray-800">{currentMonth}</span>
        <span className="ml-1 text-lg text-gray-600 font-normal">{year}</span>
      </div>
      <div className="border rounded-lg px-1">
        <button type="button"
                className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center"
                onClick={e => handleMonthClick(e, true)}
        >
          <svg className="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <div className="border-r inline-flex h-6"/>
        <button type="button"
                className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1"
                onClick={e => handleMonthClick(e, false)}
        >
          <svg className="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
