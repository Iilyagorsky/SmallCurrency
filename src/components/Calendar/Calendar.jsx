import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from './Calendar.module.scss';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React from "react";

const Calendar = ({ selectedDate, setSelectDate}) => {

  const onChange = (date) => {
    setSelectDate(date);
  };

  const onClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={style.wrapper}>
      <div className={style.center} >
        <DatePicker
          id="date"
          className={style.picker}
          dateFormat="dd-MM-yyyy"
          selected={selectedDate}
          onChange={onChange}
        />
        <CalendarMonthIcon className={style.icon} onClick={onClick} />
      </div>
    </div>
  );
};

export default Calendar;
