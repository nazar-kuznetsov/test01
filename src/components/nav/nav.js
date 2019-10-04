import React, { Component } from 'react';
import { Icon } from 'antd';
import {NavLink} from 'react-router-dom';
import './nav.scss';


class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li className="option">Основные</li>
          <li className="p-menuitem">
            <NavLink className="p-menuitem-link" exact={true} to="/">
              <Icon type="home" theme="filled" /><span className="p-menuitem-text">Главная</span>
            </NavLink>
          </li>
          <li className="p-menuitem">
            <NavLink className="p-menuitem-link" to="/users">
              <Icon type="github" theme="filled" /><span className="p-menuitem-text">Пользыватели</span>
            </NavLink>
          </li>
          <li className="p-menuitem">
            <NavLink className="p-menuitem-link" to="/media">
              <Icon type="folder-open" theme="filled" /><span className="p-menuitem-text">Загрузки</span>
            </NavLink>
          </li>
          <li className="p-menuitem">
            <NavLink className="p-menuitem-link" to="/appeal">
              <Icon type="mail" theme="filled" /><span className="p-menuitem-text">Обращение</span>
            </NavLink>
          </li>
          {/* <li className="option">Страницы</li>
          <li className="p-menuitem">
            <NavLink className="p-menuitem-link" to="/children">
              <span className="pi pi-fw pi-star p-menuitem-icon" /><span className="p-menuitem-text">Детям</span>
            </NavLink>
          </li> */}
        </ul>
      </nav>
    );
  }
}

export default Nav;
