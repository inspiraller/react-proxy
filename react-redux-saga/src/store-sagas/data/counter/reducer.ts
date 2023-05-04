

import { AnyAction } from 'redux';
import at from './actionTypes';
import initialState, { IInitial } from './_initialState';
import {rdcCounterUpdate, PropActionUpdateCounter} from './actions/actionUpdateCounter';

const reducer = (state: IInitial = initialState, action: AnyAction): IInitial => {
  switch (action.type) {
    case at.UPDATE_COUNTER:
      return rdcCounterUpdate({state, action} as {state: IInitial, action: PropActionUpdateCounter});
    default:
      return state;
  }
};



export default reducer;
