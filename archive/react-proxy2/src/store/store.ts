import {initialState as todos} from './data/todos/_initialState';

interface PropsCombined {
  [key: string]: any;
}
const combined: PropsCombined = {
  todos: {
    dataState: todos
  }
}


export const createStore = () => Object.keys(combined).reduce((acc, cur) => {
  const proxied = new Proxy(combined[cur], {
    set: function setProxy (target, key, val) {
      // debug: console.log('setProxy set cb - ', {target, key, val})
      if (target[key] !== val) {
        target[key] = val;
        //                              todos
        const myEvent = new CustomEvent(cur as string, {
          detail: val,
          bubbles: true,
          cancelable: true,
          composed: false,
        });
        global.dispatchEvent(myEvent);
      }
      return target[key];
    }
  })
  acc[cur] = proxied;
  return acc;
}, {} as PropsCombined);

let store: PropsCombined;

// @ts-ignore:next-line
if (typeof store === 'undefined') {
  store = createStore();
}

export default store;