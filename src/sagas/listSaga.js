import { all, fork, takeLatest, put, call } from '@redux-saga/core/effects';
import axios from 'axios';
import { LOAD_INFOSTAMPS_SUCCESS, LOAD_INFOSTAMPS_FAILURE, LOAD_INFOSTAMPS_REQUEST } from '../reducers/listReducer';
import baseURL from './baseURL';

axios.defaults.baseURL = baseURL;

function loadInfostampsAPI() {
  return axios.get('/infostamps')
    .then(res => res.data)
    .catch(err => console.error(err));
}

function* loadInfostamps(action) {
  try{
    const infostamps = yield call(loadInfostampsAPI);
    yield put({
      type: LOAD_INFOSTAMPS_SUCCESS,
      infostamps,
    });
  } catch (e) {
    yield put({
      type: LOAD_INFOSTAMPS_FAILURE,
      error: e,
    })
  }
}

function* watchLoadInfostamps() {
  yield takeLatest(LOAD_INFOSTAMPS_REQUEST, loadInfostamps);
}

export default function* listSaga() {
  yield all([
    fork(watchLoadInfostamps),
  ])
}