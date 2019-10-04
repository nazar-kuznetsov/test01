import React, { Component } from 'react';
import { Dropdown, Button } from 'antd';
// import { Button } from 'primereact/button';
import UserCard from '../user-card';
import './header.scss';
import LogoUser from './user-logo.jpg';

export default class Header extends Component {
  render() {
    return (
      <header className="page-header">
        <div className="user-block">
          <Dropdown overlayClassName="page-header__drop-down" overlay={<UserCard />} trigger={['click']}>
            <Button >Rossery Agency
              <a className="ant-dropdown-link" href="#">
                <img className="user-logo" src={LogoUser} alt=""/>
              </a>
            </Button>
          </Dropdown>
        </div>
      </header>
    );
  }
}
