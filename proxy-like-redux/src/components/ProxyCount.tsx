import useCounter from "@/store-proxy/data/counter/useCounter";
import { acCounterUpdate } from "@/store/data/counter/actions/CounterUpdate";

const Count = () => {
  const { state, dispatch } = useCounter();

  const handleIncrement = () => {
    dispatch(acCounterUpdate({count: state.count + 1}));
  };

  return (
    <div>
      count:{state.count}
      <button onClick={handleIncrement}>Trigger Proxy Counter</button>
    </div>
  );
}


export default Count;