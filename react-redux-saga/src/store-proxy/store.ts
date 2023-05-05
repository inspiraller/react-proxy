import Events from "events";
import EventEmitter from "./EventEmitter";
import { loadStore } from "@/store/persist";

import { storeKey as storeKeyCounter } from "./data/counter/storeKey";

import initialStateCounter from "@/store/data/counter/_initialState";

export interface PropWithState {
  state: any;
}
export interface PropProxyStore {
  [key: string]: PropWithState;
}


const combined: PropProxyStore = {
  [storeKeyCounter]: {
    state: initialStateCounter,
  },
};

export const createStore = (EventEmitter: Events): PropProxyStore => {
  const loadedStore = loadStore() as PropProxyStore;
  const store = Object.keys(combined).reduce((acc, cur) => {
    const proxied = new Proxy(loadedStore?.[cur] ?? combined[cur], {
      set: function setProxy(target, key, val) { // key is state
        if (target.state !== val) {
          target.state = val;

          // 2) 
          // input: Triggered by mutating the state of original object
          // output: EventEmitter.on

          console.log('2) emitting', {cur, key, val})
          EventEmitter.emit(cur, val);
        }
        return Reflect.get(target, key, val);
      },
    });
    acc[cur] = proxied;
    return acc;
  }, {} as PropProxyStore);
  
  return store;
};

const store = createStore(EventEmitter);

export { store, EventEmitter };
