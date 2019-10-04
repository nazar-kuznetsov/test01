import { put, takeLatest, call } from 'redux-saga/effects';
import Api, { ApiMethods } from '../../../../../middleware/api';
import {
  ADMIN_MEDIA_ALT_CHANGE_REQUEST,
  ADMIN_MEDIA_ALT_CHANGE_SUCCESS,
  ADMIN_MEDIA_ALT_CHANGE_ERROR
} from '../constants';

function* mediaAltUpdate({ payload }) {
  try {
    const data = yield call(Api.fetch, {
      endpoint: `upload/${payload.id}`,
      method: ApiMethods.PUT,
      body: {
        alt: payload.alt
      }
    });

    if (data.httpStatus === 200) {
      yield put({
        type: ADMIN_MEDIA_ALT_CHANGE_SUCCESS,
        payload: {
          id: payload.id,
          alt: payload.alt
        }
      });
    }

  } catch (error) {
    yield put({ type: ADMIN_MEDIA_ALT_CHANGE_ERROR, error });
  }
}

export function* mediaAltUpdateSaga() {
  yield takeLatest(ADMIN_MEDIA_ALT_CHANGE_REQUEST, mediaAltUpdate);
}
