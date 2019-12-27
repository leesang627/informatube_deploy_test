import { all, fork, takeLatest, put, call } from '@redux-saga/core/effects';
import axios from 'axios';
import { ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAILURE } from '../reducers/userReducer';
import baseURL from './baseURL';

axios.defaults.baseURL = baseURL;

function addUserAPI(name) {
  return axios.post('/users', {name: name})
    .then((res) => (res.data));
}

function* addUser(action) {
  try{
    const user = yield call(addUserAPI, action.name);
    yield put({
      type: ADD_USER_SUCCESS,
      user,
    })
  } catch (e) {
    console.error(e);
    yield put({
      type: ADD_USER_FAILURE,
      error: e,
    })
  }
}

function* watchAddUser() {
  yield takeLatest(ADD_USER_REQUEST, addUser);
}

export default function* userSaga() {
  yield all([
    fork(watchAddUser),
  ]);
}