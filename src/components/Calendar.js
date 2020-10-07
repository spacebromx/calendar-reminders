import React, {useContext, useState} from 'react';
import {GlobalContext} from "../Store";
import {generateCalendar} from "../utils";
import Header from "./Header";
import Navigation from "./Navigation";
import Day from "./Day";
import Modal from "./Modal";
import Overlay from "./Overlay";
import {actions, TIME_FRAMES} from "../constants";

const Calendar = () => {
  const {state: {month, year}, dispatch} = useContext(GlobalContext)
  const days = generateCalendar({month, year})
  const [showModal, setShowModal] = useState(false)

  function isToday({year, month, day}) {
    const newDate = new Date()
    const currentDay = newDate.getDate()
    const currentMonth = newDate.getMonth()
    const currentYear = newDate.getFullYear()

    return day === currentDay && month === currentMonth && year === currentYear
  }

  return (
    <>
      {showModal && <Overlay>
        <Modal onClose={() => setShowModal(false)} />
      </Overlay>}
      <Navigation/>
      <div className="-mx-1 -mb-1">
        <Header/>

        <div className="flex flex-wrap border-t border-l">
          {days.map(({day, period}, i) => (
            <Day
              key={`${day}-${i}`}
              number={day}
              highlight={i % 7 === 0 || (i % 7) === 6}
              current={period === TIME_FRAMES.CURRENT}
              today={isToday({year, month, day})}
              onClick={() => {
                dispatch({
                  type: actions.CREATE_REMINDER,
                  payload: {
                    newDay: day,
                    newMonth: month,
                    newYear: year
                  }
                })
                setShowModal(true)
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Calendar;
