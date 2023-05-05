import { combineReducers, AnyAction, Store } from 'redux';
import counter from './data/counter/reducer';

export interface ApplicationState {
  counter: ReturnType<typeof counter>;
}

export const rootReducer = {
  counter
};

const createRootReducer = () =>
  combineReducers<ApplicationState>({
    ...rootReducer
  });

export default createRootReducer;


/* eslint-disable import/no-mutable-exports */
export type Tstore = Store<ApplicationState, AnyAction>;

interface PropStoreEmpty {
  store?: Tstore;
}

interface PropStore {
  store: Tstore;
}
