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
      set: function setProxy(target, key, val) {
        if (target[key as "state"] !== val) {
          // target.state = {}
          target[key as "state"] = val;
          target[key as keyof typeof target] = val;

          console.log('emitting', {key, val})
          EventEmitter.emit(key, val);
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

console.log('10) ', {store})

export { store, EventEmitter };
