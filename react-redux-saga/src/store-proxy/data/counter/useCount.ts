import withUse from "@/hocs/withUse";
import { storeKey } from "./_initialState";
import { actionUpdateCount } from "./actionCount";
import reducer from "./reducer";

const useCount = withUse({ storeKey, action: actionUpdateCount, reducer });
export default useCount;
