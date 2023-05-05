
import at from './actionTypes';
import initialState, { IInitial } from './_initialState';
import {rdcCounterUpdate} from './actions/CounterUpdate';
import { CounterAction } from '@/types';


const reducer = (state: IInitial = initialState, action: CounterAction): IInitial => {
  switch (action.type) {
    case at.COUNTER_UPDATE:
      return rdcCounterUpdate({state, action} as {state: IInitial, action: CounterAction});
    default:
      return state;
  }
};



export default reducer;
