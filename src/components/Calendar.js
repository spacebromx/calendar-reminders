import React, {useContext} from 'react';
import {GlobalContext} from "../Store";
import {generateCalendar} from "../utils";
import Header from "./Header";
import Navigation from "./Navigation";
import Day from "./Day";

const Calendar = () => {
  const {state: {month, year}} = useContext(GlobalContext)
  const days = generateCalendar({month, year})

  function isToday({year, month, day}) {
    const newDate = new Date()
    const currentDay = newDate.getDate()
    const currentMonth = newDate.getMonth()
    const currentYear = newDate.getFullYear()

    return day === currentDay && month === currentMonth && year === currentYear
  }

  return (
    <>
      <Navigation/>
      <div className="-mx-1 -mb-1">
        <Header/>

        <div className="flex flex-wrap border-t border-l">
          {days.map(({day, current}, i) => (
            <Day key={`${day}-${i}`} number={day} highlight={i % 7 === 0 || (i % 7) === 6} current={current} today={isToday({year, month, day})} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Calendar;
