import React, { Component } from 'react';
import { Button, Icon, Modal, Form, Input } from 'antd';
import Table from '../../../components/table';
import './users-list.scss';

class UserList extends Component {
  state = {
    visible: false,
    done: false
  }

  openModal = () => {
    this.setState({ visible: true });
  }

  closeModal = () => {
    this.setState({ visible: false });
  }

  createUser = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.addUsers(values);
        this.closeModal();
        this.props.form.resetFields();
      }
    });
  }

  render() {

    const { getFieldDecorator } = this.props.form;
    return (
      <div className="table-users">
        <div className="content-section implementation">
          <Modal
            okText="Сохранить"
            cancelText="Отменить"
            title="Новый администратор"
            visible={this.state.visible}
            onOk={this.createUser}
            onCancel={this.closeModal}
          >
            <Form onSubmit={this.createUser} className="login-form">
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
                })(<Input prefix={<Icon type="user" />} placeholder="Введите email"/>)}
              </Form.Item>
              <Form.Item label="Имя">
                {getFieldDecorator('name', {
                  rules: [
                    {
                      message: 'Имя не валидное'
                    },
                    {
                      required: true,
                      message: 'Введите имя'
                    }
                  ]
                })(<Input prefix={<Icon type="aliwangwang" />} placeholder="Введите имя"/>)}
              </Form.Item>
              <Form.Item label="Пароль">
                {getFieldDecorator('password', {
                  rules: [
                    {
                      message: 'Ваш пароль не валидный'
                    },
                    {
                      required: true,
                      message: 'Введите пароль'
                    }
                  ]
                })(<Input prefix={<Icon type="lock" />} placeholder="Введите пароль"/>)}
              </Form.Item>
            </Form>
          </Modal>
          <h2>Администраторы</h2>
          <div className="table-users__button">
            <Button onClick={this.openModal} type="primary">
              <Icon type="user-add" />
              Создать администратора
            </Button>
          </div>
          <Table
            data={this.props.users}
            className="table-users"
            deleteUsers={this.props.deleteUsers}
            header={
              [
                {label: 'Имя'},
                {label: 'Email'},
                {label: 'Удалить', style: {width: '50px'}}
              ]
            }
          />
        </div>

      </div>
    );
  }
}

// export default UserList;

const SignIn = Form.create({ name: 'create-user' })(UserList);


export default SignIn;
