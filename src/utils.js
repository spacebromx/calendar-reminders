import getDaysInMonth from "date-fns/getDaysInMonth";
import getDay from "date-fns/getDay";

export const generateCalendar = ({month, year}) => {
  // how many days are there in a month
  const numberOfDaysInMonth = getDaysInMonth(new Date(year, month))

  // how many days are there in the previous month
  const numberOfDaysInPrevMonth = getDaysInMonth(new Date(year, month - 1 ))

  // what day of the week is the first day of the month (0 - 6)
  const startingDay = getDay(new Date(year, month , 1))
  let days = Array(35).fill({})

  let j = 1
  let k = 1
  let l = 0
  for(let i = 0; i < days.length; i++) {
    if(i >= startingDay) {
      if (j <= numberOfDaysInMonth ) {
        days[i] = {day: j, current: true}
        j++
      } else {
        days[i] = {day: k}
        k++
      }
    } else {
      l++
    }
  }

  // Generate an array with the days of the month prior
  const complement = [...Array(numberOfDaysInPrevMonth + 1).keys()].splice(-l)

  for(let i = 0; i < l; i++) {
    days[i] = {day: complement[i]}
  }

  return days
}
