import { AnyAction } from 'redux';
import { TGenGeneric } from '@/types';
import { put, takeEvery, select } from 'redux-saga/effects';

import at from '../actionTypes';
import { IInitial } from '../_initialState';

export interface PropActionUpdateUser extends AnyAction {
  type: string;
  payload: IInitial;
}

export type TacUserUpdate = (payload: IInitial) => PropActionUpdateUser;
const acUserUpdate: TacUserUpdate = payload => ({
  type: at.UPDATE_USER,
  payload
});

const actions = {
  acUserUpdate
};

type TrdcUpdateUser = (props: { state: IInitial; action: PropActionUpdateUser }) => IInitial;
export const rdcUpdateUser: TrdcUpdateUser = ({ state, action }) => {
  return {
    ...state,
    ...action.payload
  };
};


function* sagaUpdateSomethingElse(action: PropActionUpdateUser): TGenGeneric<IInitial> {
  // const { payload } = action;
  const payloadExistingState = yield select(state => {
    const { first_name, last_name } = state.auth.user;
    return {
      first_name,
      last_name
    };
  });
  yield put({
    type: at.UPDATE_SOMETHING_ELSE,
    payload: {
      somethingElse: `hello ${payloadExistingState.first_name}`
    }
  });
}

function* sagaWatchUpdateUser() {
  yield takeEvery(at.UPDATE_USER, sagaUpdateSomethingElse);
}

export { actions, sagaWatchUpdateUser };

export default actions;
