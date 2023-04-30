import { combineReducers } from 'redux';
import user from './user/reducer';

const auth = combineReducers({
  user
});

export default auth;
