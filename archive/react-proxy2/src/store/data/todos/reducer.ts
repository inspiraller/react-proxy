import type { PropsInitial} from './_initialState';
import {rdcCreate} from './actionAndReduce/create';

import {at} from './actionTypes';

type AnyAction = {
  type: string;
  payload: any;
}

const reducer = (state: PropsInitial, action: AnyAction): PropsInitial => {
  const { payload } = action;
  switch (action.type) {
    case at.CREATE:
      return rdcCreate({ state, payload });
    default:
      return state;
  }
}
export default reducer;
