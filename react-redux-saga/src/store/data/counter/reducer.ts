import { AnyAction } from 'redux';
import at from './actionTypes';
import initialState, { IInitial } from './_initialState';
import {rdcCounterUpdate} from './actions/CounterUpdate';

const reducer = (state: IInitial = initialState, action: AnyAction): IInitial => {
  switch (action.type) {
    case at.COUNTER_UPDATE:
      return rdcCounterUpdate({state, action} as {state: IInitial, action: AnyAction});
    default:
      return state;
  }
};



export default reducer;
