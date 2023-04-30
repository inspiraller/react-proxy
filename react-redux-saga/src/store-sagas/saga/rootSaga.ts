import { fork, all } from 'redux-saga/effects';

import { sagaWatchUpdateUser } from '../data/auth/user/actions/actionUpdateUser';

function* rootSaga() {
  yield all([
    fork(sagaWatchUpdateUser)
   
  ]);
}

export default rootSaga;
