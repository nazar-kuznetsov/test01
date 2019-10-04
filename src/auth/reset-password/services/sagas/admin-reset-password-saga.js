import {put, takeLatest, call} from 'redux-saga/effects';
import Api, {ApiMethods} from '../../../../../middleware/api';
import {
  ADMIN_RESET_PASSWORD_CHECK_TOKEN_REQUEST,
  ADMIN_RESET_PASSWORD_CHECK_TOKEN_SUCCESS,
  ADMIN_RESET_PASSWORD_CHECK_TOKEN_ERROR
} from '../constants';


function * adminResetPassword(action) {
  try {

    const data = yield call(Api.fetch, {
      endpoint: 'user/reset-password',
      method: ApiMethods.POST,
      body: {token: action.payload}
    });

    if (data.httpStatus === 200) {
      yield put({type: ADMIN_RESET_PASSWORD_CHECK_TOKEN_SUCCESS});
    } else {
      yield put({type: ADMIN_RESET_PASSWORD_CHECK_TOKEN_ERROR});
    }

  } catch (error) {
    yield put({type: ADMIN_RESET_PASSWORD_CHECK_TOKEN_ERROR, error});
  }
}

export function * adminResetPasswordWatch() {
  yield takeLatest(ADMIN_RESET_PASSWORD_CHECK_TOKEN_REQUEST, adminResetPassword);
}
