import {
  USERS_FETCH_REQUEST,
  USERS_FETCH_SUCCESS,
  USERS_ADD_SUCCESS,
  USERS_DELETE_SUCCESS
} from './constants';

const initialState = {
  users: [],
  loading: false,
  notification: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCH_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case USERS_FETCH_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case USERS_ADD_SUCCESS: {
      return {
        ...state,
        notification: true,
        users: [...state.users, action.payload]
      };
    }
    case USERS_DELETE_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.payload._id)
      };
    }
    default: return state;
  }
};

