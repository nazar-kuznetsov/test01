import {put, takeLatest, call} from 'redux-saga/effects';
import Api, {ApiMethods} from '../../../middleware/api';
import {
  ADMIN_FORGOT_PASSWORD_REQUEST,
  ADMIN_FORGOT_PASSWORD_SUCCESS,
  ADMIN_FORGOT_PASSWORD_ERROR
} from '../constants';


function * forgotPassword({payload}) {
  try {

    const data = yield call(Api.fetch, {
      endpoint: 'user/forgot-password',
      method: ApiMethods.POST,
      body: {email: payload}
    });

    // localStorage.setItem('token', data.responseData.token);
    // yield put({type: ADMIN_FORGOT_PASSWORD_SUCCESS, data: data.responseData.user});


  } catch (error) {
    yield put({type: ADMIN_FORGOT_PASSWORD_ERROR, error});
  }
}

export function * adminForgotPassword() {
  yield takeLatest(ADMIN_FORGOT_PASSWORD_REQUEST, forgotPassword);
}
