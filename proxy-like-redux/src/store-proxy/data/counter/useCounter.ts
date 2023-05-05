import withUse from "@/store-proxy/hoc/withUse";
import { storeKey } from "./storeKey";
import reducer from "@/store/data/counter/reducer";


const useCounter = withUse({ storeKey, reducer }); 
// @example: 
//   const {state, dispatch} = useCounter();
//   dispatch(someaction(payload))

export default useCounter;
