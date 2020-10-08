import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames'
import {GlobalContext} from "../Store";
import {actions} from "../constants";

const Day = ({number, highlight, current, today, reminders, showModal, onClick }) => {
  const {dispatch} = useContext(GlobalContext)
  return (
    <div style={{width: "14.28%", height: "120px"}}
         className={cx('day px-4 pt-2 border-r border-b relative overflow-y-scroll', {'bg-gray-200': highlight})}>
      <button
        className={cx('inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100 text-gray-400 hover:bg-blue-200 font-bold', {'text-gray-700': current}, {'text-blue-600': current && highlight}, {'text-red-600 bg-red-200': today} )}
        onClick={onClick}
      >
        {number}
      </button>
      <div style={{height: "80px"}} className="overflow-y-auto mt-1">
        {reminders?.map(reminder => (
          <div className="mt-1 overflow-hidden, inline-flex items-center" key={reminder.id}>
            <div style={{width: '10px', height: '10px', backgroundColor: reminder.color}} className="rounded mr-1" />
            <p className="truncate w-20" style={{fontSize: '0.7em'}}>
              <button onClick={() => {
                dispatch({
                  type: actions.LOAD_REMINDER,
                  payload: reminder
                })
                showModal(true)
              }}>
                {reminder.description}
              </button>
            </p>
            <span className="ml-1 text-gray-600 font-normal" style={{fontSize: '0.3em'}}>{reminder.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

Day.propTypes = {
  number: PropTypes.string.isRequired,
  highlight: PropTypes.bool,
  current: PropTypes.bool,
  today: PropTypes.bool,
  reminders: PropTypes.array,
  showModal: PropTypes.func,
  onClick: PropTypes.func,
}

Day.defaultProps = {
  highlight: false,
  current: false,
  today: false
}

export default Day;
