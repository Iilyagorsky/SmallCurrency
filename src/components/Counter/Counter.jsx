import React from 'react';
import style from './Counter.module.scss'

const Counter = ({count, setCount}) => {

  const handleChange = (event) => {
    setCount(parseInt(event.target.value));
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={decrement} disabled={count === 0}>
        -
      </button>
      <textarea
        className={style.input}
        wrap="soft"
        name="counter"
        maxLength={15}
        rows="2"
        cols="10"
        value={count ? count : 0}
        onChange={handleChange}
      />
      <button className={style.button} onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
