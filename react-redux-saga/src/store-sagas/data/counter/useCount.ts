import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '@/store-sagas/rootReducer';

import at from './actionTypes';
import { IInitial } from './_initialState';

const useCount = () => {
  const dispatch = useDispatch();
  const acCounterUpdate = (payload: IInitial) =>
    dispatch({
      type: at.UPDATE_COUNTER,
      payload
    });
  return {
    counter: useSelector((state: ApplicationState) => state.counter) ?? {count: 0},
    acCounterUpdate
  };
};
export default useCount;
