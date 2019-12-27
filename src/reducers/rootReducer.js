import { combineReducers } from 'redux';
import userReducer from './userReducer';
import infostampReducer from './infostampReducer';
import viewReducer from './viewReducer';
import listReducer from './listReducer';
import playerReducer from './playerReducer';
import likeReducer from './likeReducer';

const rootReducer = combineReducers({
  user: userReducer,
  infostamp: infostampReducer,
  view: viewReducer,
  list: listReducer,
  player: playerReducer,
  like: likeReducer,
});

export default rootReducer;