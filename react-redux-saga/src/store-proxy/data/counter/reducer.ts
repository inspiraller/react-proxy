
import { AnyAction } from "redux";
import { IInitial } from "./_initialState";
import at from './actionTypes';
import { rdcCounterUpdate } from './actions/CounterUpdate';

const reducer = (state: IInitial, actionResult: AnyAction): IInitial => {
  switch (actionResult.type) {
    case at.COUNTER_UPDATE:
      return rdcCounterUpdate({state, action: actionResult})
    default:
      return state;
  }
};

export default reducer;
