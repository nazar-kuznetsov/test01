import React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Typography } from 'antd';


import { Redirect, Link } from 'react-router-dom';
import { forgotPassword } from '../services/action';
import { sendMail, getMessage } from '../services/selectors';
// import Authorization from '../../components/authorization';

// const ForgotPassword = props => {

//   const submit = ({ email }) => {
//     props.forgotPassword({ email });
//   };


//   return (
//     <>
//     <Authorization
//       title="Восстановление пароля"
//       link="← Назад"
//       to="/login"
//       inputPassword={false}
//       submit={submit}
//       send={props.sendMail}
//       label="Отправить"
//       response={props.message}
//     />
//     </>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     sendMail: sendMail(state),
//     message: getMessage(state)
//   };
// };

// const mapDispatchToProps = {
//   forgotPassword,
//   getMessage
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

const { Title } = Typography;
class NormalLoginForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.forgotPassword(values);
        // this.props.signIn(values);
      }
    });
  };

  render() {
    if (this.props.user) {
      const url = this.props.location.state;
      return <Redirect to={url && url.from || '/'} />;
    }
    // console.log(this.props.sendMail)
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="authorization">

        <div className="authorization__conterainer">
          <h2 className="authorization__title">
          Восстановление пароля
          </h2>
          {this.props.sendMail ?
            <p>Отправка формы...</p>
            : <div>
              <h4>{this.props.message.message}</h4>
              {!this.props.message.success ?
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
                    })(<Input placeholder="Введите email"/>)}
                  </Form.Item>
                  <Form.Item>
                    <Button style={{ width: '100%' }} type="primary" htmlType="submit" className="login-form-button">
                Отправить
                    </Button>
                    <Link className="login-form-forgot" to="/login">Вернуться на Login</Link>
                  </Form.Item>
                </Form>
                : null }
            </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sendMail: sendMail(state),
    message: getMessage(state)
  };
};

const mapDispatchToProps = {
  forgotPassword,
  getMessage
};


const ForgoutPassword = Form.create({ name: 'normal_login' })(NormalLoginForm);


export default connect(mapStateToProps, mapDispatchToProps)(ForgoutPassword);


// export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
