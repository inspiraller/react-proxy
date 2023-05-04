import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';

import { loadState, saveState } from '@/store-sagas/persist';
import { Tstore } from '@/store-sagas/rootReducer';

// https://dev.to/fly/make-your-own-state-management-for-react-with-proxies-1n0m#tldr
// Using this instead of CustomEvent - so we can use SSR

import { useEffect, useState } from 'react';
import constructStore from '@/store-sagas/constructStore';

export default function App({ Component, pageProps }: AppProps) {
  const [store, setStore] = useState<Tstore>();
  useEffect(() => {
    const objStore = constructStore({ initialState: loadState() })
    setStore(objStore.store);
    objStore.store.subscribe(() => {
      saveState(objStore.store.getState());
    });
  }, []);

  return store ? <Provider store={store}><Component {...pageProps} /></Provider> : null
}
