import withUse from "@/hocs/withUse";
import { storeKey } from "./_initialState";
import reducer from "./reducer";

const useCounter = withUse({ storeKey, reducer }); 
// @example: 
//   const {state, dispatch} = useCounter();
//   dispatch(someaction(payload))

export default useCounter;
