import React, {useContext} from 'react';
import {GlobalContext} from "../Store";
import {generateCalendar} from "../utils";
import Header from "./Header";
import Navigation from "./Navigation";
import Day from "./Day";

const Calendar = () => {
  const {state: {month, year}} = useContext(GlobalContext)
  const days = generateCalendar({month, year})

  return (
    <>
      <Navigation/>
      <div className="-mx-1 -mb-1">
        <Header/>

        <div className="flex flex-wrap border-t border-l">
          {days.map(({day, current}, i) => (
            <Day key={`${day}-${i}`} number={day} highlight={i % 7 === 0 || (i % 7) === 6} current={current}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calendar;
