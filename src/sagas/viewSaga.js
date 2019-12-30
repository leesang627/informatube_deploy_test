import { all, fork, takeLatest, put, call } from '@redux-saga/core/effects';
import axios from 'axios';
import { URL_TO_IMAGE_REQUEST, 
  URL_TO_IMAGE_SUCCESS, 
  URL_TO_IMAGE_FAILURE,
} from '../reducers/viewReducer';
import baseURL from './baseURL';

axios.defaults.baseURL = baseURL;

function urlToImageAPI([url, uid]) {
  return axios.post('/infostamp/url', {url, uid})
    .then((res) => (res.data));
}

function* urlToImage(action) {
  try{
    const { imageUrl } = yield call(urlToImageAPI, [action.url, action.uid]);
    yield put({
      type: URL_TO_IMAGE_SUCCESS,
      imageUrl: imageUrl,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: URL_TO_IMAGE_FAILURE,
      error: e,
    })
  }
}

function* watchUrlToImage() {
  yield takeLatest(URL_TO_IMAGE_REQUEST, urlToImage);
}

export default function* viewSaga() {
  yield all([
    fork(watchUrlToImage),
  ]);
}