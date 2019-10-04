import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, addUsers, deleteUsers } from './services/action';
import { getUsers } from './services/selectors';
import UserList from './users-list';
import './users.scss';

class Users extends Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.fetchUsers();
    }
  }

  addUsers = user => {
    this.props.addUsers(user);
  }

  render() {
    return (
      <div className="users-page">
        {/* {this.props.notification && <p>Заявка создана успешно</p>} */}
        <UserList
          users={this.props.users}
          addUsers={this.addUsers}
          deleteUsers={this.props.deleteUsers}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: getUsers(state),
    notification: state.usersReducer.notification
  };
};

const mapDispatchToProps = {
  fetchUsers,
  addUsers,
  deleteUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
