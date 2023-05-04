import Events from "events";
import EventEmitter from "./EventEmitter";
import { loadStore } from "./persist";
import { PropStore } from '@/types';

import { storeKey as storeKeyCounter } from "./data/counter/_initialState";
import initialStateCounter from "@/store-proxy/data/counter/_initialState";

const combined: PropStore = {
  [storeKeyCounter]: {
    state: initialStateCounter,
  },
};

export const createStore = (EventEmitter: Events): PropStore => {
  const loadedStore: PropStore = loadStore();
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
  }, {} as PropStore);
  
  return store;
};

const store = createStore(EventEmitter);

export { store, EventEmitter };
