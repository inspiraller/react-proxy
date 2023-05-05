import useCounter from "@/store-proxy/counter/useCounter";

const Count = () => {
  const [state, setProxyState] = useCounter();

  const handleIncrement = () => {
    setProxyState({
     count: state.count + 1
    });
  };

  return (
    <div>
      count:{state.count}
      <button onClick={handleIncrement}>Trigger Proxy Counter</button>
    </div>
  );
};

export default Count;
