import { put, takeLatest, call } from 'redux-saga/effects';
import Api, {ApiMethods} from '../../../middleware/api';
import {
  ADMIN_CHECK_TOKEN,
  ADMIN_SIGN_IN_SUCCESS,
  ADMIN_SIGN_IN_ERROR
} from '../constants';


function* getUser() {
  try {

    const data = yield call(Api.fetch, {
      endpoint: 'user/authorization',
      method: ApiMethods.GET
    });

    if (data.httpStatus === 200) {
      yield put({ type: ADMIN_SIGN_IN_SUCCESS, data: data.responseData.user });
    }

  } catch (error) {
    yield put({ type: ADMIN_SIGN_IN_ERROR, error });
  }
}

export function* adminFetchUser() {
  yield takeLatest(ADMIN_CHECK_TOKEN, getUser);
}
