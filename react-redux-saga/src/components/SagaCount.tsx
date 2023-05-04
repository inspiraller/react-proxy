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

      <button onClick={handleIncrement}>Trigger SAGA counter</button>
    </div>
  );
}

export default SagaCounter;