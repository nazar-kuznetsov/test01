import { put, takeLatest, call } from 'redux-saga/effects';
import Api, { ApiMethods } from '../../../../../middleware/api';
import {
  ADMIN_MEDIA_FETCH_REQUEST,
  ADMIN_MEDIA_FETCH_SUCCESS
} from '../constants';


function* fetchMedia() {
  try {
    const data = yield call(Api.fetch, {
      endpoint: 'upload',
      method: ApiMethods.GET
    });

    if (data.httpStatus === 200) {
      yield put({ type: ADMIN_MEDIA_FETCH_SUCCESS, payload: data.responseData });
    }

  } catch (error) {
    // yield put({ type: ADMIN_SIGN_IN_ERROR, error });
  }
}

export function* fetchMediaSagaWatch() {
  yield takeLatest(ADMIN_MEDIA_FETCH_REQUEST, fetchMedia);
}
