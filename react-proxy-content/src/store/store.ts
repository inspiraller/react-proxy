import Events from "events";
import { loadStore } from "./persist";

export interface PropWithState {
  state: any;
}
export interface PropStore {
  [key: string]: PropWithState;
}

const storeKey = "obj1";

const combined: PropStore = {
  [storeKey]: {
    state: {
      count: 0 // initial state
    }
  }
}

export const createStore = (EventEmitter: Events): PropStore => {
  let store: PropStore = loadStore();
  if (!store) {
    store = Object.keys(combined).reduce((acc, cur) => {
      const proxied = new Proxy(combined[cur], {
        set: function setProxy (target, key, val) {
          if (target[key as 'state'] !== val) { // target.state = {}
            target[key as 'state'] = val;
            target[key as keyof typeof target] = val;
            EventEmitter.emit(key, val);
          }
          return Reflect.get(target, key, val);
        }
      })
      acc[cur] = proxied;
      return acc;
    }, {} as PropStore);
  }
  return store;
}
