# What is this repo about?
This shows how to use native javascript proxys as a global state manager.
It is equivalent to redux

- See example - proxy-simple

# How does it work?
```ts
const combined {
  counter: {
    state: {
      count: 0
    }
  }
}
export const createStore = (EventEmitter: Events): PropProxyStore => {
  const store = Object.keys(combined).reduce((acc, cur) => {
    const proxied = new Proxy(combined[cur], {
      set: function setProxy(target, key, val) { // key is state
        if (target.state !== val) {
          target.state = val;
          // trigger an event on the window object 
          // EventEmitter.emit('counter', {count: 0})

          // optional  - you don't have to pass the value to the event.
          //                     ||
          //                     \/
          EventEmitter.emit(cur, /*val*/);

        }
        return Reflect.get(target, key, val);
      },
    });
    acc[cur] = proxied;
    return acc;
  }, {} as PropProxyStore);
  return store;
};

const store = createStore(EventEmitter);
// store.counter === proxy
// store.counter.state = {} triggers the set() method above and creates a new state object
// EventEmitter.emit() triggers a window event
// window.addEventListener('counter', () => {
//   const updated = store.counter.state
//})
```