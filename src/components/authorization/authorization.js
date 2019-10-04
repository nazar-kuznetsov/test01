import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { InputText } from 'primereact/inputtext';
import cn from 'classnames';
import './authorization.scss';

class Authorization extends Component {
  state = {
    email: '',
    password: ''
  }
  submitForm = e => {
    e.preventDefault();
    this.props.submit(this.state);
  };

  changeInput = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      title,
      link,
      to,
      label,
      send,
      response = {},
      inputPassword = true
    } = this.props;
    return (
      <div className="authorization">
        <div className="authorization__conterainer">
          <h2 className="authorization__title">{title}</h2>
          <div className="p-grid p-fluid">
            <form onSubmit={this.submitForm}>
              <div className="p-col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user" />
                  </span>
                  <InputText
                    name="email"
                    tooltip="Электронная почта"
                    onChange={this.changeInput}
                    placeholder="Email"
                  />
                </div>
              </div>
              {
                inputPassword && <div className="p-col-12">
                  <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                      <i className="pi pi-lock" />
                    </span>
                    <InputText
                      name="password"
                      tooltip="Введите пароль"
                      onChange={this.changeInput}
                      placeholder="Пароль"
                      type="password"
                    />
                  </div>
                </div>
              }
              <div className="p-col-12">
                <Button label={label} icon="pi pi-sign-in" iconPos="right" />
              </div>
              <div className="p-col-12">
                <Link to={to}>{link}</Link>
              </div>
            </form>
          </div>
          {send &&
            <div className="progress">
              <ProgressSpinner
                style={{ width: '50px', height: '50px' }}
                strokeWidth="4" fill="#EEEEEE"
                animationDuration=".9s"
              />
            </div>
          }
          <p className={cn('auth-message', { 'auth-message__error': !response.success })}>{response.message}</p>
        </div>
      </div>
    );
  }
}

export default Authorization;
