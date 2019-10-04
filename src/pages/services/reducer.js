import {
  ADMIN_SIGN_IN_SUCCESS,
  ADMIN_SIGN_OUT_SUCCESS,
  ADMIN_CHECK_TOKEN
} from './constants';

const initialState = {
  user: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_CHECK_TOKEN: {
      return {
        ...state,
        loading: true
      };
    }
    case ADMIN_SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.data,
        loading: false
      };
    case ADMIN_SIGN_OUT_SUCCESS:
      return {
        ...state,
        user: null
      };
    default: return state;
  }
};

