import { all, fork, takeLatest, put, call } from '@redux-saga/core/effects';
import axios from 'axios';
import { 
  LIKE_SUCCESS, LIKE_FAILURE, LIKE_REQUEST,
  DISLIKE_SUCCESS, DISLIKE_FAILURE, DISLIKE_REQUEST,
  CANCEL_LIKE_REQUEST, CANCEL_LIKE_SUCCESS, CANCEL_LIKE_FAILURE,
  CANCEL_DISLIKE_REQUEST, CANCEL_DISLIKE_SUCCESS, CANCEL_DISLIKE_FAILURE,
} from '../reducers/likeReducer';
import baseURL from './baseURL';

axios.defaults.baseURL = baseURL;

function likeAPI([uid, iid]) {
  return axios.patch('/infostamps/like', {uid, iid})
    .then(res => res.data);
}

function* like(action) {
  try {
    const log = yield call(likeAPI, [action.uid, action.iid]);
    yield put({
      type: LIKE_SUCCESS,
      log: log,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LIKE_FAILURE,
      error: e,
    });
  }
}

function* watchLike() {
  yield takeLatest(LIKE_REQUEST, like);
}

function dislikeAPI([uid, iid]) {
  return axios.patch('/infostamps/dislike', {uid, iid})
    .then(res => res.data);
}

function* dislike(action) {
  try {
    const log = yield call(dislikeAPI, [action.uid, action.iid]);
    yield put({
      type: DISLIKE_SUCCESS,
      log: log,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: DISLIKE_FAILURE,
      error: e,
    });
  }
}

function* watchDislike() {
  yield takeLatest(DISLIKE_REQUEST, dislike);
}

function cancelLikeAPI([uid, iid]) {
  return axios.patch('/infostamps/like/cancel', {uid, iid})
    .then(res => res.data);
}

function* cancelLike(action) {
  try {
    const log = yield call(cancelLikeAPI, [action.uid, action.iid]);
    yield put({
      type: CANCEL_LIKE_SUCCESS,
      log: log,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: CANCEL_LIKE_FAILURE,
      error: e,
    });
  }
}

function* watchCancelLike() {
  yield takeLatest(CANCEL_LIKE_REQUEST, cancelLike);
}

function cancelDislikeAPI([uid, iid]) {
  return axios.patch('/infostamps/dislike/cancel', {uid, iid})
    .then(res => res.data);
}

function* cancelDislike(action) {
  try {
    const log = yield call(cancelDislikeAPI, [action.uid, action.iid]);
    yield put({
      type: CANCEL_DISLIKE_SUCCESS,
      log: log,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: CANCEL_DISLIKE_FAILURE,
      error: e,
    });
  }
}

function* watchCancelDislike() {
  yield takeLatest(CANCEL_DISLIKE_REQUEST, cancelDislike);
}

export default function* likeSaga() {
  yield all([
    fork(watchLike),
    fork(watchDislike),
    fork(watchCancelLike),
    fork(watchCancelDislike),
  ])
};