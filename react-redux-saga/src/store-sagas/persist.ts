import { PERSIST_STORE, KILL_STORE } from 'src/config';

import { RootState } from './getStore';

type TloadState = () => RootState;
export const loadState: TloadState = () => {
  if (KILL_STORE) {
    localStorage.removeItem('state');
  }
  if (!PERSIST_STORE) {
    return {};
  }
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    const state = JSON.parse(serializedState);
    return state;
  } catch (e) {
    return undefined;
  }
};

export const killLocalStorageSocketState = () => {
  try {
    const stringifiedState = localStorage.getItem('state') as string;
    const state = JSON.parse(stringifiedState);
    localStorage.setItem('state', JSON.stringify(state));
  } catch (err) {
    console.warn('cannot kill state');
  }
};

type TsaveState = (state: RootState) => void;
export const saveState: TsaveState = state => {
  if (!PERSIST_STORE) {
    return;
  }
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // Ignore write errors;
  }
};
