import {
  ADMIN_SIGN_IN_SUCCESS,
  ADMIN_SIGN_IN_ERROR,
  ADMIN_SIGN_OUT,
  ADMIN_FORGOT_PASSWORD_REQUEST,
  ADMIN_FORGOT_PASSWORD_SUCCESS
} from './constants';

const initialState = {
  user: null,
  error: null,
  sendEmail: false,
  message: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        sendEmail: true
      };
    case ADMIN_FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        sendEmail: false,
        message: action.payload
      };
    case ADMIN_SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case ADMIN_SIGN_IN_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case ADMIN_SIGN_OUT:
      console.log(123);
      return {
        ...state,
        user: null
      };
    default: return state;
  }
};

