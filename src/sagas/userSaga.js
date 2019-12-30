import { all, fork, takeLatest, put, call } from '@redux-saga/core/effects';
import axios from 'axios';
import { 
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
  LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE,
} from '../reducers/userReducer';
import baseURL from './baseURL';

axios.defaults.baseURL = baseURL;

function logInAPI(name) {
  return axios.post('/user/login', {name: name, password: 'dummy'}, {
    withCredentials: true,
  });
}

function* logIn(action) {
  try{
    const result = yield call(logInAPI, action.name);
    yield put({
      type: LOG_IN_SUCCESS,
      user: result.data,
    })
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
      error: e,
    })
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function logOutAPI() {
  return axios.post('/user/logout', {}, {
    withCredentials: true,
  });
}

function* logOut() {
  try{
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    })
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_OUT_FAILURE,
      error: e,
    })
  }
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function loadUserAPI() {
  return axios.get('/user', {
    withCredentials: true,
  });
}

function* loadUser() {
  try{
    const result = yield call(loadUserAPI);
    console.log('result',result);
    yield put({
      type: LOAD_USER_SUCCESS,
      user: result.data,
    })
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_USER_FAILURE,
      error: e,
    })
  }
}

function* watchLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLoadUser),
    fork(watchLogOut),
  ]);
}