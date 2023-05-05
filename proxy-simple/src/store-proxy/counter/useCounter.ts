
import React, { useEffect, useState, useCallback } from "react";

import { PropWithState, store } from "@/store-proxy/store";
import EventEmitter from "@/store-proxy/EventEmitter";
import { saveStore } from "@/store-proxy/persist";
import { cloneObj } from "@/util/cloneDeep";
import { IInitial, storeKey } from "./storeKey";


type PropDispatch = IInitial | ((prop: IInitial) => IInitial);

const useCounter = () => {
  const [localState, setLocalState] = useState<PropWithState["state"]>({});
  useEffect(() => {
    const cb = (val: PropWithState["state"]) => {
      // 3) 
      // input: Triggered by EventEmitter.emit
      // output: set local state

      setLocalState(val); 
    };
    // (global as any).addEventListener(storeKey, cb);
    EventEmitter.on(storeKey, cb);
    
    // first load.
    setLocalState(store[storeKey].state);

    return () => {
      // (global as any).removeEventListener(storeKey, cb);
      EventEmitter.off(storeKey, cb);
    };
  }, []);

  useEffect(() => {
    // 4) 
    // input: update of local state
    // output: persist into localStorage if desired.
    saveStore(store);

    /* eslint-disable react-hooks/exhaustive-deps */
  //  }, [store?.[storeKey]?.state]);
  }, [localState]);

  const setProxyState = useCallback(function triggerDispatch(payload: PropDispatch) {

    if (typeof payload === 'function') { // setState(prev => {return {...prev, ..new}})
      return payload(cloneObj(localState));
    }
    const stateUpdated = {...store[storeKey].state, ...payload};
    // 1) 
    // input: Triggered by action.
    // output: MUTATE ORIGINAL DATA STORE TO TRIGGER PROXY CHANGE
    store[storeKey].state = stateUpdated;

    // NOTE: Don't do this - store[storeKey] = {state: stateUpdated}
    // Otherwise you overwrite store.proxyCounter = {} and it isn't a proxy anymore.

    return stateUpdated;
    
  }, []);

  return [localState, setProxyState];
};

export default useCounter;
