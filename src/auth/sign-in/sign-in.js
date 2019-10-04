// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import Authorization from '../../components/authorization';
// import { signIn, authorization } from '../services/action';
// import { getUser, getErrorMessage } from '../services/selectors';

// const SignIn = props => {

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       props.authorization(token);
//     }
//   }, []);

//   const submit = data => {
//     props.signIn(data);
//   };

//   if (props.user) {
//     return <Redirect to={props.location.state.from || '/'} />;
//   }

//   return (
//     <>
//     <p>2</p>
//       <Authorization
//         title="Панель управление"
//         link="Забыли пароль?"
//         to="/forgot-password"
//         label="Войти"
//         submit={submit}
//         response={{ success: false, message: props.errorMessage }}
//       />
//     </>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     user: getUser(state),
//     errorMessage: getErrorMessage(state)
//   };
// };

// const mapDispatchToProps = {
//   signIn,
//   authorization
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signIn, authorization } from '../services/action';
import { getUser, getErrorMessage } from '../services/selectors';

class NormalLoginForm extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.authorization(token);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.signIn(values);
      }
    });
  };

  render() {
    if (this.props.user) {
      const url = this.props.location.state;
      return <Redirect to={url && url.from || '/'} />;
    }

    const { getFieldDecorator } = this.props.form;
    return (
      <div className="authorization">

        <div className="authorization__conterainer">
          <h2 className="authorization__title">
            Панель управление
          </h2>

          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item label="E-mail">
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'Ваш email не валидный'
                  },
                  {
                    required: true,
                    message: 'Введите email'
                  }
                ]
              })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Введите email"/>)}
            </Form.Item>
            <Form.Item label="Пароль">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Введите пароль' }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button style={{ width: '100%' }} type="primary" htmlType="submit" className="login-form-button">
                Войти
              </Button>
              <Link className="login-form-forgot" to="/forgot-password"> Забыли пароль?</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: getUser(state),
    errorMessage: getErrorMessage(state)
  };
};

const mapDispatchToProps = {
  signIn,
  authorization
};

const SignIn = Form.create({ name: 'normal_login' })(NormalLoginForm);


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
