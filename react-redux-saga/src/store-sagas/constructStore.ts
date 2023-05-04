import { configureStore, Store } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';
import createRootReducer, { ApplicationState } from './rootReducer';

type TConfigure = (arbitrary: {
  initialState: ApplicationState;
}) => { store: Store<ApplicationState> };

const constructStore: TConfigure = ({ initialState }) => {
  // credits: https://yiniski.medium.com/redux-saga-error-handling-7f1dafa4be37
  const sagaMiddleware = createSagaMiddleware({
    onError: err => {
      console.error('saga error = ', err);
      store.dispatch({ type: 'ERROR', payload: err });
    }
  });

  const reducer = createRootReducer();

  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState
  }) as Store<ApplicationState>;
  sagaMiddleware.run(rootSaga);
  return { store };
};

export default constructStore;
