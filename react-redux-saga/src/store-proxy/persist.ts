import { PERSIST_STORE, KILL_STORE } from '@/config';
import { PropStore } from '@/types';

type TloadStore = () => PropStore;
export const loadStore: TloadStore = () => {
  if (KILL_STORE) {
    // localStorage.clear();
    localStorage.removeItem('Store');
  }
  if (!PERSIST_STORE) {
    return null;
  }
  try {
    const serializedStore = localStorage.getItem('Store');
    if (serializedStore === null) {
      return null;
    }
    const store = JSON.parse(serializedStore);
    return store;
  } catch (e) {
    return null;
  }
};

export const killStore = () => {
  try {
    const stringifiedStore = localStorage.getItem('Store') as string;
    const store = JSON.parse(stringifiedStore);
    localStorage.setItem('Store', JSON.stringify(store));
  } catch (err) {
    console.warn('cannot kill Store');
  }
};

type TsaveStore = (store: PropStore) => void;
export const saveStore: TsaveStore = store => {
  if (!PERSIST_STORE) {
    return;
  }
  try {
    const serializedStore = JSON.stringify(store);
    localStorage.setItem('Store', serializedStore);
  } catch (e) {
    // Ignore write errors;
  }
};
