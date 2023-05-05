import { combineReducers, AnyAction, Store } from 'redux';
import reduxCounter from '@/store/data/counter/reducer';

export interface ApplicationState {
  reduxCounter: ReturnType<typeof reduxCounter>;
}

export const rootReducer = {
  reduxCounter
};

const createRootReducer = () =>
  combineReducers<ApplicationState>({
    ...rootReducer
  });

export default createRootReducer;


/* eslint-disable import/no-mutable-exports */
export type Tstore = Store<ApplicationState, AnyAction>;
