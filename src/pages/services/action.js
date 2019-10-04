import {
  ADMIN_SIGN_IN_REQUEST,
  ADMIN_SIGN_OUT_REQUEST,
  ADMIN_CHECK_TOKEN,
  ADMIN_FORGOT_PASSWORD_REQUEST
} from './constants';


export const signIn = data => ({
  type: ADMIN_SIGN_IN_REQUEST,
  payload: data
});

export const signOut = () => ({
  type: ADMIN_SIGN_OUT_REQUEST
});

export const fetchUser = () => ({
  type: ADMIN_CHECK_TOKEN
});

export const resetPassword = email => ({
  type: ADMIN_FORGOT_PASSWORD_REQUEST,
  payload: email
});
