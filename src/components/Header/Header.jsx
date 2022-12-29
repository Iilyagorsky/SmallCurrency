import React from 'react';
import {NavLink} from 'react-router-dom';
import routePaths from "../../constants/routePaths";
import style from './Header.module.scss';

const Header = () => {
  const links = [
    { key: 'btn1', path: routePaths.main.currency, title: 'Currency' },
    { key: 'btn2', path: routePaths.main.precious, title: 'Precious' },
  ];

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <nav className={style.navigation}>
          <ul className={style.navigationList}>
            {links.map((link) => (
              <li key={link.key}>
                <NavLink
                  id={link.key}
                  className={({ isActive }) => `${style.button} ${isActive ? style.buttonActive : ''}`}
                  to={link.path}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
