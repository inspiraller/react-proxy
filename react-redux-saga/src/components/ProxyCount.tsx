
import Link from "next/link";
import useCount from "@/store-proxy/data/counter/useCount";

const Count = () => {
  const { state, dispatch } = useCount();

  const triggerProxyChange = () => {
    dispatch(state.count + 1);
  };

  return (
    <>
      count:{state.count}
      <button onClick={triggerProxyChange}>Trigger count increase</button>
    </>
  );
}


export default Count;