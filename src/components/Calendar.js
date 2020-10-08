import React, { useContext, useState } from "react";
import { GlobalContext } from "../Store";
import {
  generateCalendar,
  getRemindersByDate,
  parseAndFormatDate,
} from "../utils";
import Header from "./Header";
import Navigation from "./Navigation";
import Day from "./Day";
import Modal from "./Modal";
import Overlay from "./Overlay";
import { actions, TIME_FRAMES } from "../constants";

const Calendar = () => {
  const {
    state: { reminders, month, year },
    dispatch,
  } = useContext(GlobalContext);
  const days = generateCalendar({ month, year });
  const [showModal, setShowModal] = useState(false);

  function isToday(date) {
    let today = new Date();
    let newDate = new Date(Date.parse(date));

    // set time to zero since it's not relevant for the comparison
    today.setHours(0, 0, 0, 0);
    newDate.setHours(0, 0, 0, 0);

    today = parseAndFormatDate(today);
    newDate = parseAndFormatDate(newDate);

    return today === newDate;
  }

  return (
    <>
      {showModal && (
        <Overlay>
          <Modal
            onClose={() => {
              setShowModal(false);
            }}
          />
        </Overlay>
      )}
      <Navigation />
      <div className="-mx-1 -mb-1">
        <Header />
        <div className="flex flex-wrap border-t border-l">
          {days.map(({ date, period }, i) => (
            <Day
              key={date}
              date={date}
              number={parseAndFormatDate(date, { day: "numeric" })}
              highlight={i % 7 === 0 || i % 7 === 6}
              current={period === TIME_FRAMES.CURRENT}
              today={isToday(date)}
              reminders={getRemindersByDate(reminders, date)}
              showModal={setShowModal}
              onClick={() => {
                dispatch({
                  type: actions.CREATE_REMINDER,
                  payload: { date },
                });
                setShowModal(true);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Calendar;
