import React, {useEffect, useState} from 'react';
import Counter from "../Counter/Counter";
import {getCurrency} from "../../api/currency";
import style from "./Currency.module.scss"
import Calendar from "../Calendar/Calendar";

const Currency = ({name}) => {
  const [count, setCount] = useState(0);
  const [currency, setCurrency] = useState([]);

  const date = new Date();
  const [selectedDate, setSelectedDate] = useState(date);

  const getCurList = async () => {
    const response = await getCurrency(name.cur, selectedDate);
    if (response instanceof Error) {
      console.log(response.message);

      return;
    }
    setCurrency(response.Cur_OfficialRate);
  };

  useEffect(() => {
    getCurList();
  });


  return (
    <div className={style.window}>
      <div className={style.nameWrapper}>
        <p className={style.name}>{name.cur}</p>
        <Calendar selectedDate={selectedDate} setSelectDate={setSelectedDate} date={date}/>
      </div>
      <Counter className={style.counter} count={count} setCount={setCount} value={name.val}/>
      <div className={style.valueWrapper}>
        <p className={style.value}>{(currency * count * name.val).toFixed(3)} руб.</p>
      </div>
    </div>
  );
};

export default Currency;
