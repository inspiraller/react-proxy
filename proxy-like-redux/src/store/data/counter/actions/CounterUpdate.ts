
import at from '../actionTypes';
import { IInitial } from '../_initialState';
import { CounterAction } from '@/types';

export const acCounterUpdate = (payload: IInitial):  CounterAction => ({
  type: at.COUNTER_UPDATE,
  payload
});


type TrdcCounterUpdate = (props: { state: IInitial; action: CounterAction }) => IInitial;
export const rdcCounterUpdate: TrdcCounterUpdate = ({ state, action }) => {
  return {
    ...state,
    ...action.payload
  };
};

