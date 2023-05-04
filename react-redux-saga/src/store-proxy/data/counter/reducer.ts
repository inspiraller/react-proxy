import { PropStore, TAnyActionResult } from '@/types';
import { PropsInitialState, storeKey } from "./_initialState";
import at from './actionTypes';
import { reduceUpdateCount } from './actionCount';

const reducer = (store: PropStore, actionResult: TAnyActionResult): PropsInitialState => {
  const state = store[storeKey].state;
  switch (actionResult.type) {
    case at.UPDATE_COUNT:
      return reduceUpdateCount({store, payload: actionResult.payload})
    default:
      return state;
  }
};

export default reducer;
