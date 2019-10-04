import { combineReducers } from 'redux';
import authReducer from '../auth/services/reducer';
import usersReducer from '../pages/users/services/reducer';
import adminUploadReducer from '../pages/media/services/reducer';

const rootReducer = combineReducers({
  authReducer,
  usersReducer,
  adminUploadReducer
});


export default rootReducer;
