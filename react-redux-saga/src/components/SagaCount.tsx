import useCounter from "@/store-sagas/data/counter/useCounter";
import { acCounterUpdate } from "@/store-sagas/data/counter/actions/CounterUpdate";
const  SagaCounter = () => {
  const { state, dispatch } = useCounter();
  const handleIncrement = () => {
    dispatch(acCounterUpdate( {count: state.count + 1}));
  };

  return (
    <div>
      {state.count}
      <button onClick={handleIncrement}>Trigger SAGA counter</button>
    </div>
  );
}

export default SagaCounter;