import { AnyAction } from 'redux';

import at from '../actionTypes';
import { IInitial } from '../_initialState';

export const acCounterUpdate = (payload: IInitial): AnyAction => ({
  type: at.COUNTER_UPDATE,
  payload
});


type TrdcCounterUpdate = (props: { state: IInitial; action: AnyAction }) => IInitial;
export const rdcCounterUpdate: TrdcCounterUpdate = ({ state, action }) => {
  return {
    ...state,
    ...action.payload
  };
};

