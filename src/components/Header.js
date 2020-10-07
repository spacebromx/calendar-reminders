import React from 'react';
import {weekDays} from "../constants";

const Header = () => {
  return (
    <div className="flex flex-wrap">
      {weekDays.map(day => (
        <div className="px-2 py-2 flex-1" key={day}>
          <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">{day}</div>
        </div>
      ))}
    </div>
  );
};

export default Header;
