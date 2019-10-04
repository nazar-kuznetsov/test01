import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getLoading,
  tokenIsValidate
} from './services/selectors.js';
import {
  fetchCheckToken,
  setPassword
} from './services/action';

class ResetPassword extends Component {

    state = {
      access: false,
      password: ''
    }

    componentDidMount() {
      this.props.fetchCheckToken(this.props.match.params.token);
    }

    sendPassword = () => {
      this.props.setPassword(this.state.password, this.props.match.params.token);
    }

    handleChange = e => {
      this.setState({ password: e.target.value });
    }

    render() {
      const { loading, tokenIsValidate } = this.props;
      return (
        <div>
          {
            loading
              ? <p>загрузка...</p>
              : tokenIsValidate
                ? <div>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.password}
                    placeholder="Введите новый пароль"
                  />
                  <button onClick={this.sendPassword}>Сохранить</button>
                </div>
                : <p>Доступ закрыт</p>
          }
        </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    loading: getLoading(state),
    tokenIsValidate: tokenIsValidate(state)
  };
};

const mapDispatchToProps = {
  fetchCheckToken,
  setPassword
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
