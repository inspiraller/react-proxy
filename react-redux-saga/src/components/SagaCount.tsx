import { useEffect } from "react";
import useCount from "@/store-sagas/data/counter/useCount";
const  SagaCounter = () => {
  const { counter, acCounterUpdate } = useCount();
  const handleIncrement = () => {
    acCounterUpdate({
      count: counter.count + 1
    });
  };
  useEffect(() => {

  }, [counter]);

  return (
    <div>
      {counter.count}

      <button onClick={handleIncrement}>Trigger saga update</button>
    </div>
  );
}

export default SagaCounter;