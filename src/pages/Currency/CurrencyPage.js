import React from 'react';
import Currency from "../../components/Currency/Currency";
import style from "./CurrencyPage.module.scss"

const CurrencyPage = () => {
  const namesCurrency = [
    {
      id: 1,
      cur: 'USD',
      val: 1
    },
    {
      id: 2,
      cur: 'EUR',
      val: 1
    },
    {
      id: 3,
      cur: 'RUB',
      val: 0.01
    },
  ]

  return (
    <div className={style.main}>
      <div className={style.wrapper}>
        {
          namesCurrency.map((name) => (
            <Currency key={name.id} name={name}/>
          ))
        }
      </div>
    </div>
  );
};

export default CurrencyPage;
