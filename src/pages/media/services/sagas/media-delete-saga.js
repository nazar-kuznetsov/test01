import { put, takeLatest, call } from 'redux-saga/effects';
import Api, { ApiMethods } from '../../../../../middleware/api';
import {
  ADMIN_MEDIA_DELETE_REQUEST,
  ADMIN_MEDIA_DELETE_SUCCESS,
  ADMIN_MEDIA_DELETE_ERROR
} from '../constants';


function* mediaDelete(action) {
  try {
    const data = yield call(Api.fetch, {
      endpoint: `upload/${action.payload}`,
      method: ApiMethods.DELETE
    });

    if (data.httpStatus === 200) {
      yield put({ type: ADMIN_MEDIA_DELETE_SUCCESS, payload: action.payload });
    }

  } catch (error) {
    // yield put({ type: ADMIN_MEDIA_DELETE_ERROR, error });
  }
}

export function* mediaDeleteSagaWatch() {
  yield takeLatest(ADMIN_MEDIA_DELETE_REQUEST, mediaDelete);
}
