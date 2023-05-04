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

export { actions };

export default actions;
