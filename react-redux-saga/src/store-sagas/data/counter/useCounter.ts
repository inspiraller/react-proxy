import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '@/store-sagas/rootReducer';

const useCounter = () => {
  const dispatch = useDispatch();
  return {
    state: useSelector((state: ApplicationState) => state.counter),
    dispatch
  };
};
export default useCounter;
