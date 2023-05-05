import React, { useEffect, useState, useCallback } from "react";
import { AnyAction } from "redux";
import {
  TAnyActionResult,
  PropWithState,
} from "@/types";
import { store } from "@/store-proxy/store";
import EventEmitter from "@/store-proxy/EventEmitter";
import { IInitial } from "@/store-proxy/data/counter/_initialState";
import { saveStore } from "@/store-proxy/persist";

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

        console.log("3) EventEmitter on", val);
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
      console.log(
        "4) update local state for storeKey",
        storeKey,
        store[storeKey].state
      );

      /* eslint-disable react-hooks/exhaustive-deps */
   //  }, [store?.[storeKey]?.state]);
    }, [state]);

    const dispatch = useCallback(function triggerDispatch(actionResult: TAnyActionResult) {
      // dispatch
      const stateUpdated = reducer(store[storeKey].state, actionResult);
      console.log("1) mutate original data", { store });
      // 1) 
      // input: Triggered by action.
      // output: MUTATE ORIGINAL DATA STORE TO TRIGGER PROXY CHANGE
      store[storeKey].state = stateUpdated;

      return stateUpdated;
    }, []);

    return { state, dispatch };
  };

  return useProxyState;
};

export default withUse;
