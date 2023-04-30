import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';

import { saveState } from '@/store-sagas/persist';

import Events from "events";

import objStore from '@/store-sagas/getStore';
const { store } = objStore;


// https://dev.to/fly/make-your-own-state-management-for-react-with-proxies-1n0m#tldr
// Using this instead of CustomEvent - so we can use SSR
const EventEmitter = new Events();
EventEmitter.setMaxListeners(Number.MAX_SAFE_INTEGER);

import { createStore } from "@/store-proxy/store";
import { useEffect } from 'react';

(global as any).react = {
  store: createStore(EventEmitter),
  EventEmitter: EventEmitter
}  

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    (global as any).react = {
      store: createStore(EventEmitter),
      EventEmitter: EventEmitter
    }      

    store.subscribe(() => {
      // console.log('~~~~~~~~ store subscribe response saveState = ', store.getState());
      saveState(store.getState());
    });
  }, [])
  return <Provider store={store}><Component {...pageProps} /></Provider>
}
