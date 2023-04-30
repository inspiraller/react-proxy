import { PropStore } from "@/store/store";
import React, { FC, useEffect, useState, createContext, useContext } from "react";

import Events from "events";

// https://dev.to/fly/make-your-own-state-management-for-react-with-proxies-1n0m#tldr
// Using this instead of CustomEvent - so we can use SSR
const EventEmitter = new Events();
EventEmitter.setMaxListeners(Number.MAX_SAFE_INTEGER);


import { createStore } from "@/store/store";

export interface PropsContext {
  store: PropStore;
  EventEmitter: Events;
}
const placeholder = {
  store: {},
  EventEmitter
};

export const ContextStore = createContext<PropsContext>(placeholder);
export const ProviderStore: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [store, setStore] = useState<PropStore>({})
  useEffect(() => {
    const initStore = createStore(EventEmitter);
    setStore(initStore);
  }, []);

  return (
    <ContextStore.Provider
      value={{
        store,
        EventEmitter
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};

export const useStore = () => useContext(ContextStore);
