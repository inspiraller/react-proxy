import { createStore, applyMiddleware, compose, Store } from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';

import createRootReducer, { ApplicationState } from './rootReducer';
// import middlewareResetTopLevel from './middlewareResetTopLevel';

type TConfigure = (arbitrary: {
  initialState: ApplicationState;
}) => { store: Store<ApplicationState> };

const constructStore: TConfigure = ({ initialState }) => {
  const composeEnhancers =
    ((global as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose;

  // credits: https://yiniski.medium.com/redux-saga-error-handling-7f1dafa4be37
  const sagaMiddleware = createSagaMiddleware({
    onError: err => {
      console.error('saga error = ', err);
      store.dispatch({ type: 'ERROR', payload: err });
    }
  });

  const middlewares = [sagaMiddleware];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const reducers = createRootReducer();

  const store = createStore<ApplicationState, any, any, any>(
    reducers,
    initialState,
    enhancer
  ) as Store<ApplicationState>;
  sagaMiddleware.run(rootSaga);
  return { store };
};

export default constructStore;
