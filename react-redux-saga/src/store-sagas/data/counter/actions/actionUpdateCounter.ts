import { AnyAction } from 'redux';

import at from '../actionTypes';
import { IInitial } from '../_initialState';

export interface PropActionUpdateCounter extends AnyAction {
  type: string;
  payload: IInitial;
}

export type TacCounterUpdate = (payload: IInitial) => PropActionUpdateCounter;
const acCounterUpdate: TacCounterUpdate = payload => ({
  type: at.UPDATE_COUNTER,
  payload
});

const actions = {
  acCounterUpdate
};

type TrdcCounterUpdate = (props: { state: IInitial; action: PropActionUpdateCounter }) => IInitial;
export const rdcCounterUpdate: TrdcCounterUpdate = ({ state, action }) => {
  return {
    ...state,
    ...action.payload
  };
};

// function* sagaUpdateSomethingElse(action: PropActionUpdateCounter): TGenGeneric<IInitial> {
//   // const { payload } = action;
//   const payloadExistingState = yield select(state => {
//     const { count } = state.auth.counter;
//     return {
//       count

//     };
//   });
  // yield put({
  //   type: at.UPDATE_SOMETHING_ELSE,
  //   payload: {
  //     somethingElse: `hello ${payloadExistingState.first_name}`
  //   }
  // });
// }

// function* sagaWatchUpdateUser() {
//   yield takeEvery(at.UPDATE_COUNTER, sagaUpdateSomethingElse);
// }

export { actions };

export default actions;
