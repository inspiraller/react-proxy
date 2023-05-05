import { PERSIST_STORE, KILL_STORE } from '@/config';
import { PropProxyStore } from '@/store-proxy/store';


type TloadStore = () => PropProxyStore;
export const loadStore: TloadStore = () => {
  if (KILL_STORE) {
    // localStorage.clear();
    localStorage.removeItem('Store');
  }
  if (!PERSIST_STORE) {
    return null;
  }
  try {
    const strStore = localStorage.getItem('Store');
    if (strStore === null) {
      return;
    }
    const store = JSON.parse(strStore);
    return store;
  } catch (e) {
    return;
  }
};

export const killStore = () => {
  try {
    const strStore = localStorage.getItem('Store') as string;
    const store = JSON.parse(strStore);
    localStorage.setItem('Store', JSON.stringify(store));
  } catch (err) {
    console.warn('cannot kill Store');
  }
};

type TsaveStore = (store: PropProxyStore, isOverwrite?: boolean) => void;
export const saveStore: TsaveStore = (storeToSave, isOverwrite = false) => {
  if (!PERSIST_STORE) {
    return;
  }
  try {
    const strStore = localStorage.getItem('Store');
    const store = strStore? JSON.parse(strStore) : {};
    const merged = isOverwrite ? storeToSave : {...store, ...storeToSave};
    const strMergeStore = JSON.stringify(merged);
    localStorage.setItem('Store', strMergeStore);
  } catch (e) {
    // Ignore write errors;
  }
};
