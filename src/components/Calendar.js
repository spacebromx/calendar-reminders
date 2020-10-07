import React from 'react';
import {generateCalendar} from "../utils";
import Header from "./Header";
import Navigation from "./Navigation";
import Day from "./Day";

const Calendar = () => {
  const days = generateCalendar({month: 2, year: 2020})

  return (
    <>
      <Navigation/>
      <div className="-mx-1 -mb-1">
        <Header/>

        <div className="flex flex-wrap border-t border-l">
        {days.map(({day, current}, i) => (
          <Day key={`${day}-${i}`} number={day} highlight={i % 7 === 0 || (i % 7)  === 6} current={current} />
        ))}
        </div>
      </div>
    </>
  );
};

export default Calendar;
