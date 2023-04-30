import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '@/store-sagas/rootReducer';

import at from './actionTypes';
import { IInitial } from './_initialState';

const useUser = () => {
  const dispatch = useDispatch();
  const acUserUpdate = (payload: IInitial) =>
    dispatch({
      type: at.UPDATE_USER,
      payload
    });
  return {
    auth: useSelector((state: ApplicationState) => state.auth),
    acUserUpdate
  };
};
export default useUser;
