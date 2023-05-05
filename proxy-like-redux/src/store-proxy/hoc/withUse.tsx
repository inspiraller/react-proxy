import React, { useEffect, useState, useCallback } from "react";

import { PropWithState, store } from "@/store-proxy/store";
import EventEmitter from "@/store-proxy/EventEmitter";
import { saveStore } from "@/store/persist";

import { IInitial } from "@/store/data/counter/_initialState";
import { AnyAction } from "@/types";

interface PropsOutput {
  state: PropWithState["state"];
  dispatch: (payload: any) => PropWithState["state"];
}

interface PropsWithUse {
  storeKey: string;
  reducer: (
    state: IInitial,
    actionResult: AnyAction
  ) => IInitial;
}

const withUse = ({
  storeKey,
  reducer,
}: PropsWithUse): (() => PropsOutput) => {
  const useProxyState = () => {
    const [state, setState] = useState<PropWithState["state"]>({});
    useEffect(() => {
      const cb = (val: PropWithState["state"]) => {
        // 3) 
        // input: Triggered by EventEmitter.emit
        // output: set local state

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
      // 4) 
      // input: update of local state
      // output: persist into localStorage if desired.
      saveStore(store);

      /* eslint-disable react-hooks/exhaustive-deps */
   //  }, [store?.[storeKey]?.state]);
    }, [state]);

    const dispatch = useCallback(function triggerDispatch(actionResult: AnyAction) {
      // dispatch
      const stateUpdated = reducer(store[storeKey].state, actionResult);
      // 1) 
      // input: Triggered by action.
      // output: MUTATE ORIGINAL DATA STORE TO TRIGGER PROXY CHANGE
      store[storeKey].state = stateUpdated;


      // NOTE: Don't do this
      //store[storeKey] = {state: stateUpdated}
      // Otherwise you overwrite store.proxyCounter = {} and it isn't a proxy anymore.



      return stateUpdated;
    }, []);

    return { state, dispatch };
  };

  return useProxyState;
};

export default withUse;
