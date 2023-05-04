import useProxyCount from "@/store-proxy/data/counter/useCount";

const Count = () => {
  const { state, dispatch } = useProxyCount();

  const handleIncrement = () => {
    dispatch(state.count + 1);
  };

  return (
    <div>
      count:{state.count}
      <button onClick={handleIncrement}>Trigger Proxy Counter</button>
    </div>
  );
}


export default Count;