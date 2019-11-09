import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
  event: eventReducer,
  error: errorReducer,
  auth: authReducer
});
