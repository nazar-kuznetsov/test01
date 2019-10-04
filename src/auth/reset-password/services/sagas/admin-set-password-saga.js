import { put, takeLatest, call } from 'redux-saga/effects';
import Api, { ApiMethods } from '../../../../../middleware/api';
import {
  ADMIN_SET_PASSWORD_REQUEST,
  ADMIN_SET_PASSWORD_SUCCESS,
  ADMIN_SET_PASSWORD_ERROR
} from '../constants';


function* adminSetPassword(action) {
  try {
    const { token, password } = action.payload;
    const data = yield call(Api.fetch, {
      endpoint: 'user/set-password',
      method: ApiMethods.POST,
      body: { token, password }
    });

    if (data.httpStatus === 200) {
      yield put({ type: ADMIN_SET_PASSWORD_SUCCESS });
    } else {
      yield put({ type: ADMIN_SET_PASSWORD_ERROR });
    }

  } catch (error) {
    yield put({ type: ADMIN_SET_PASSWORD_ERROR, error });
  }
}

export function* adminSetPasswordWatch() {
  yield takeLatest(ADMIN_SET_PASSWORD_REQUEST, adminSetPassword);
}
