import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';

import { saveState } from '@/store-sagas/persist';
import objSagaStore from '@/store-sagas/getStore';
const { store } = objSagaStore;


// https://dev.to/fly/make-your-own-state-management-for-react-with-proxies-1n0m#tldr
// Using this instead of CustomEvent - so we can use SSR

import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    store.subscribe(() => {
      // console.log('~~~~~~~~ store subscribe response saveState = ', store.getState());
      saveState(store.getState());
    });
  }, [])
  return <Provider store={store}><Component {...pageProps} /></Provider>
}
