import React, {useEffect, useState} from 'react';
import Counter from "../Counter/Counter";
import {getPrecious, getPreciousName} from "../../api/currency";
import style from "./Precious.module.scss";
import Calendar from "../Calendar/Calendar";

const Currency = ({id}) => {
  const [count, setCount] = useState(0);
  const [precious, setPrecious] = useState();
  const [name, setName] = useState();

  const date = new Date();
  const [selectedDate, setSelectedDate] = useState(date);

  const getPreciousValue = async () => {
    const response = await getPrecious(id, selectedDate);
    if (response instanceof Error) {
      console.log(response.message);

      return;
    }
    setPrecious(response.Value);
  };

  useEffect(() => {
    getPreciousValue();
  });


  const getName = async () => {
    const response = await getPreciousName(id);
    if (response instanceof Error) {
      console.log(response.message);

      return;
    }
    setName(response);
  };

  useEffect(() => {
    getName();
  });


  return (
    <div className={style.window}>
      <div className={style.nameWrapper}>
        <p className={style.name}>{name}</p>
        <Calendar selectedDate={selectedDate} setSelectDate={setSelectedDate}/>
      </div>
      <Counter className={style.counter} count={count} setCount={setCount} value={1}/>
      <div className={style.valueWrapper}>
        <p className={style.value}>{(precious * count).toFixed(3)} руб.</p>
      </div>
    </div>
  );
};

export default Currency;
