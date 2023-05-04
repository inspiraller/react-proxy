import { PropStore, TAnyAction } from '@/types';
import { PropsInitialState, storeKey } from "./_initialState";
import at from './actionTypes';

export const actionUpdateCount: TAnyAction = (payload: PropsInitialState) => {
  return {
    type: at.UPDATE_COUNT,
    payload
  };
};

type TreduceUpdateCount = (props: {store: PropStore, payload: PropsInitialState}) => PropsInitialState;
export const reduceUpdateCount: TreduceUpdateCount = ({store, payload}) => {
  // WARNING - THIS IS MUTABLE
  const existing = store[storeKey].state;
  return {
    ...existing,
    count: payload
  };
};
