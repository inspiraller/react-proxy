import { AnyAction } from 'redux';
import { IInitial } from "../_initialState";
import at from '../actionTypes';

export const acCounterUpdate = (payload: IInitial): AnyAction => {
  return {
    type: at.COUNTER_UPDATE,
    payload
  };
};

type TrdcCounterUpdate = (props: {state: IInitial, action: AnyAction}) => IInitial;
export const rdcCounterUpdate: TrdcCounterUpdate = ({state, action}) => {
  return {
    ...state,
    ...action.payload
  };
};
