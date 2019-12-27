import { all, fork, takeLatest, put, call } from '@redux-saga/core/effects';
import axios from 'axios';
import {SAVE_INFOSTAMP_REQUEST, SAVE_INFOSTAMP_SUCCESS, SAVE_INFOSTAMP_FAILURE} from '../reducers/infostampReducer';
import baseURL from './baseURL';

axios.defaults.baseURL = baseURL;

function saveInfostampAPI(payload) {
  console.log(payload);
  return axios.post('/infostamp', payload)
    .then(()=> {console.log('post!')})
    .catch((err) => console.error(err));
}

function* saveInfostamp(action) {
  try{
    yield call(saveInfostampAPI, action.payload);
    yield put({
      type: SAVE_INFOSTAMP_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: SAVE_INFOSTAMP_FAILURE,
      error: e,
    })
  }
}

function* watchSaveInfostamp() {
  yield takeLatest(SAVE_INFOSTAMP_REQUEST, saveInfostamp);
}

export default function* infostampSaga() {
  yield all([
    fork(watchSaveInfostamp),
  ]);
}