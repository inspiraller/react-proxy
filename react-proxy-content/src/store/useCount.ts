import { useEffect, useState, useCallback } from "react";
import { PropWithState } from "./store";
import { saveStore } from "./persist";
const storeKey = "obj1";

const { store, EventEmitter } = (global as any).react;

const useCount = () => {
  const [state, setState] = useState<PropWithState["state"]>({});
  useEffect(() => {
    const cb = (val: PropWithState["state"]) => {
      setState(val);
    };
    // (global as any).addEventListener(storeKey, cb);
    EventEmitter.on(storeKey, cb);
    // first load.
    setState(store[storeKey].state);

    return () => {
      // (global as any).removeEventListener(storeKey, cb);
      EventEmitter.off(storeKey, cb);
    };
  }, []);

  useEffect(() => {
    saveStore
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [store?.[storeKey]?.state]);

  const triggerProxyChange = useCallback(function triggerProxyChange() {
    store[storeKey].state = {
      // Creates a new object - so will trigger proxy change
      ...store[storeKey].state,
      count: store[storeKey].state.count + 1,
    };
    setState(store[storeKey].state);
    saveStore(store);
  }, []);

  return { state, setState, triggerProxyChange };
};

export default useCount;
