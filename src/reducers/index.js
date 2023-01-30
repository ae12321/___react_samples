import { combineReducers } from 'redux';
import { counterReducer } from './counter';
import { isLoginReducer } from './isLogin';

export const allReducers = combineReducers({
  counter: counterReducer,
  isLogin: isLoginReducer,
});
