import React from 'react';
import {useEffect, useState} from "react";
import {getPreciousNames} from "../../api/currency";
import Precious from "../../components/Precious/Precious";
import style from './PreciousPage.module.scss'

const PreciousPage = () => {
  const [preciousName, setPreciousName] = useState([]);

  const getPreciousList = async () => {
    const response = await getPreciousNames()
    setPreciousName(response)
  }

  useEffect(() => {
    getPreciousList();
  });

  return (
    <div className={style.main}>
      <div className={style.wrapper}>
        {
          preciousName.map((id) => (
            <Precious key={id} id={id} />
          ))
        }
      </div>
    </div>
  );
};

export default PreciousPage;
