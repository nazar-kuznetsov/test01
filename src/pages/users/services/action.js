import api from '../../../middleware/api';
import {
  USERS_FETCH_REQUEST,
  USERS_FETCH_SUCCESS,
  USERS_ADD_SUCCESS,
  USERS_DELETE_SUCCESS
} from './constants';

export const fetchUsers = () => async dispatch => {
  const response = await api.get('user');
  dispatch({ type: USERS_FETCH_SUCCESS, payload: response.data });
};

export const addUsers = user => async dispatch => {
  const response = await api.post('user/register', user);
  dispatch({ type: USERS_ADD_SUCCESS, payload: response.data.user });
};

export const deleteUsers = _id => async dispatch => {
  const {data} = await api.post('user/delete', {_id});

  if (data.success) {
    dispatch({ type: USERS_DELETE_SUCCESS, payload: data });
  }
  // if (data)
  // console.log(response);
};
