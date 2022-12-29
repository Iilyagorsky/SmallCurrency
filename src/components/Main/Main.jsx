import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from "../Header/Header";
import style from "./Main.module.scss"

const Main = () => {

  return (
    <div>
      <Header />
      <div className={style.background}>
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
