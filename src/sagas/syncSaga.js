import {put, fork, all, takeLatest, delay} from '@redux-saga/core/effects';
import {SAVE_INFOSTAMP_SUCCESS} from '../reducers/infostampReducer';
import { loadInfostamps } from '../reducers/listReducer';
import { LIKE_SUCCESS, CANCEL_LIKE_SUCCESS, DISLIKE_SUCCESS, CANCEL_DISLIKE_SUCCESS } from '../reducers/likeReducer';
import { MODE_HIDDEN } from '../reducers/viewReducer';

function* loadInfostamp(action) {
  yield put(loadInfostamps());
}

function* loadInfostampAndClose(action) {
  yield put(loadInfostamps());
  yield delay(1000);
  yield put({type: MODE_HIDDEN});
}

function* watchSaveInfostamp() {
  yield takeLatest(SAVE_INFOSTAMP_SUCCESS, loadInfostampAndClose);
  yield takeLatest(LIKE_SUCCESS, loadInfostamp);
  yield takeLatest(CANCEL_LIKE_SUCCESS, loadInfostamp);
  yield takeLatest(DISLIKE_SUCCESS, loadInfostamp);
  yield takeLatest(CANCEL_DISLIKE_SUCCESS, loadInfostamp);
}

export default function* syncSaga() {
  yield all([
    fork(watchSaveInfostamp),
  ])
}