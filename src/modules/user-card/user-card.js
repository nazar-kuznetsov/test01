import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import {Link} from 'react-router-dom';
import { getUser } from '../../auth/services/selectors';
import {singOut} from '../../auth/services/action';
import UserLogo from '../header/user-logo.jpg';
import './user-card.scss';

const UserCard = props => {
  const { name, email } = props.user;
  return (
    <div>
      <div className="user-info">
        <p>{name}</p>
        <p>{email}</p>
      </div>
      <div className="drop-down__user-logo">
        <img src={UserLogo} alt=""/>
      </div>
      <div className="button-group">
        <Link to="/">
          <Button type="primary">На сайт</Button>
        </Link>
        <Button type="danger" onClick={props.singOut} >Выйти</Button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: getUser(state)
  };
};

const mapDispatchToProps = {
  singOut
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
