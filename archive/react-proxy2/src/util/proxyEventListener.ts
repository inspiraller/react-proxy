
import store from "../store/store"; // initialise store

export const proxyEventListener = (
  keyListener: keyof typeof store,
  setMethod: (obj: any) => any
) => {
  const cb = () => {
    // debug: console.log('on event todos', evt)
    setMethod(store[keyListener].dataState);
  };

  global.addEventListener(keyListener as string, cb);
  return () => {
    global.removeEventListener(keyListener as string, cb, true);
  };
};