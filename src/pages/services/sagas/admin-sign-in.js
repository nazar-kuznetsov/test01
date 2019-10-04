import {put, takeLatest, call} from 'redux-saga/effects';
import Api, {ApiMethods} from '../../../middleware/api';
import {
  ADMIN_SIGN_IN_REQUEST,
  ADMIN_SIGN_IN_SUCCESS,
  ADMIN_SIGN_IN_ERROR
} from '../constants';


function * signIn({payload}) {
  try {
    const data = yield call(Api.fetch, {
      endpoint: 'user/login',
      method: ApiMethods.POST,
      body: {email: payload.email, password: payload.password}
    });

    if (data.httpStatus === 200) {
      localStorage.setItem('token', data.responseData.token);
      yield put({type: ADMIN_SIGN_IN_SUCCESS, data: data.responseData.user});
    }

  } catch (error) {
    yield put({type: ADMIN_SIGN_IN_ERROR, error});
  }
}

export function * adminSignIn() {
  yield takeLatest(ADMIN_SIGN_IN_REQUEST, signIn);
}
