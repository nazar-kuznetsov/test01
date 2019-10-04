import { put, takeLatest, call } from 'redux-saga/effects';
import Api from '../../../../../middleware/api';
import {
  ADMIN_MEDIA_UPLOAD_REQUEST,
  ADMIN_MEDIA_UPLOAD_SUCCESS
} from '../constants';


function* mediaUpload(action) {
  try {

    // console.log(action.payload.get('files'));
    const data = yield call(Api.file, {
      endpoint: 'upload',
      body: action.payload
    });
    if (data.httpStatus === 200) {
      yield put({ type: ADMIN_MEDIA_UPLOAD_SUCCESS, payload: data.responseData.data.reverse() });
    }

  } catch (error) {
    // yield put({ type: ADMIN_SIGN_IN_ERROR, error });
  }
}

export function* MediaUploadSagaWatch() {
  yield takeLatest(ADMIN_MEDIA_UPLOAD_REQUEST, mediaUpload);
}
