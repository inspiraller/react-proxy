import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';

import { loadStore, saveStore } from '@/store/persist';
import { ApplicationState, Tstore } from '@/store-sagas/rootReducer';

// https://dev.to/fly/make-your-own-state-management-for-react-with-proxies-1n0m#tldr
// Using this instead of CustomEvent - so we can use SSR

import { useEffect, useState } from 'react';
import constructStore from '@/store-sagas/constructStore';

export default function App({ Component, pageProps }: AppProps) {
  const [store, setStore] = useState<Tstore>();
  useEffect(() => {
    
    const objStore = constructStore({ initialState: loadStore() as ApplicationState})
    setStore(objStore.store);
    objStore.store.subscribe(() => {
      saveStore(objStore.store.getState());
      
    });
  }, []);

  return store ? <Provider store={store}><Component {...pageProps} /></Provider> : null
}
