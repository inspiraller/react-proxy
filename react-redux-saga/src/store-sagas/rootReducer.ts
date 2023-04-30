import { combineReducers } from 'redux';
import auth from './data/auth';

export interface ApplicationState {
  auth: ReturnType<typeof auth>;
}

const rootReducer = {
  auth
};

const createRootReducer = () =>
  combineReducers<ApplicationState>({
    ...rootReducer
  });

export default createRootReducer;
