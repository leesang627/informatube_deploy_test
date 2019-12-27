import {all, call} from 'redux-saga/effects';
import userSaga from './userSaga';
import infostampSaga from './infostampSaga';
import viewSaga from './viewSaga';
import listSaga from './listSaga';
import likeSaga from './likeSaga';
import syncSaga from './syncSaga';

export default function* rootSaga() {
  yield all([
    call(userSaga),
    call(infostampSaga),
    call(viewSaga),
    call(listSaga),
    call(likeSaga),
    call(syncSaga),
  ]);
}