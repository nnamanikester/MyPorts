import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NetworkReducer from './NetworkReducer';

export default combineReducers({
  auth: AuthReducer,
  network: NetworkReducer,
});
