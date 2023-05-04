import useProxyCount from "@/store-proxy/data/counter/useCount";

const Count = () => {
  const { state, dispatch } = useProxyCount();

  const handleIncrement = () => {
    dispatch(state.count + 1);
  };

  return (
    <>
      count:{state.count}
      <button onClick={handleIncrement}>Trigger count increase</button>
    </>
  );
}


export default Count;