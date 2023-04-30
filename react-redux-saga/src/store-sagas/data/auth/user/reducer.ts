

import { AnyAction } from 'redux';
import at from './actionTypes';
import initialState, { IInitial } from './_initialState';
import {rdcUpdateUser, PropActionUpdateUser} from './actions/actionUpdateUser';

const reducer = (state: IInitial = initialState, action: AnyAction): IInitial => {
  switch (action.type) {
    case at.UPDATE_USER:
      return rdcUpdateUser({state, action} as {state: IInitial, action: PropActionUpdateUser});
    case at.UPDATE_SOMETHING_ELSE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};



export default reducer;
