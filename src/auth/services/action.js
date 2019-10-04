import api from '../../middleware/api';
import {
  ADMIN_SIGN_IN_REQUEST,
  ADMIN_SIGN_IN_SUCCESS,
  ADMIN_SIGN_IN_ERROR,
  ADMIN_FORGOT_PASSWORD_REQUEST,
  ADMIN_FORGOT_PASSWORD_SUCCESS,
  ADMIN_SIGN_OUT
} from './constants';

/* Вход: email: password
=================================================================== */
export const signIn = user => async dispatch => {
  const { data } = await api.post('user/login', user);
  console.log(data);
  if (data.success) {
    localStorage.setItem('token', `Bearer ${data.token}`);
    dispatch({ type: ADMIN_SIGN_IN_SUCCESS, payload: data.user });
  } else {
    dispatch({ type: ADMIN_SIGN_IN_ERROR, payload: data.message });
  }
};

/* Востановить сессию: jwt token
=================================================================== */
export const authorization = token => async dispatch => {
  const { data } = await api.get('user/authorization', token);
  if (data.success) {
    dispatch({ type: ADMIN_SIGN_IN_SUCCESS, payload: data.user });
  }
};

/* отправить письмо для сброса пароля
=================================================================== */
export const forgotPassword = email => async dispatch => {
  dispatch({ type: ADMIN_FORGOT_PASSWORD_REQUEST });
  const { data } = await api.post('user/email-reset-password', email);
  dispatch({ type: ADMIN_FORGOT_PASSWORD_SUCCESS, payload: data });
};

/* Выйти из админ панели
=================================================================== */
export const singOut = () => dispatch => {
  localStorage.removeItem('token');
  dispatch({ type: ADMIN_SIGN_OUT });
};
