import {put, takeEvery} from 'redux-saga/effects';
// import Api, {ApiMethods} from '../../../../middleware/api';
import {
  ADMIN_SIGN_OUT_REQUEST,
  ADMIN_SIGN_OUT_SUCCESS,
  ADMIN_SIGN_OUT_ERROR

} from '../constants';


function * signOut(action) {
  try {
    // const data = yield call(Api.fetch, {
    //     endpoint: 'admin/login',
    //     method: ApiMethods.GET
    // });
    sessionStorage.removeItem('token');
    yield put({type: ADMIN_SIGN_OUT_SUCCESS});
  } catch (error) {
    yield put({type: ADMIN_SIGN_OUT_ERROR, error});
  }
}

export function * adminSignOut() {
  yield takeEvery(ADMIN_SIGN_OUT_REQUEST, signOut);
}
