import React from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames'

const Day = ({number, highlight, current}) => {
  return (
    <div style={{width: "14.28%", height: "120px"}}
         className={cx('day px-4 pt-2 border-r border-b relative overflow-y-scroll', {'bg-gray-200': highlight})}>
      <div
        className={cx('inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100 text-gray-400 hover:bg-blue-200 font-bold', {'text-gray-700': current}, {'text-blue-600': current && highlight} )}>{number}
      </div>
      <div style={{height: "80px"}} className="overflow-y-auto mt-1">
        {/*<div className="px-2 py-1 rounded-lg mt-1 overflow-hidden border" />*/}
      </div>
    </div>
  );
};

Day.propTypes = {
  number: PropTypes.number.isRequired,
  highlight: PropTypes.bool,
  current: PropTypes.bool
}

Day.defaultProps = {
  highlight: false,
  current: false
}

export default Day;
