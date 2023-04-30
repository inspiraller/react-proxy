# Understanding how proxies work
A 'proxy' is an object, but with an additional 'set' method that gets triggered when a property of the 'proxy' changes
In the following example we can use a proxy instead of redux to trigger React to refresh.


## If NOT using a proxy and simply changing the value manually
**store.obj1.state = new Object()**
Does not update useStat
1. [state, setState] = useState(store.obj1.state);
2. store.obj1.state.count = store.obj1.state.count + 1;
OR 
store.obj1.state = {count: store.obj1.state.count + 1};
3. NO REACT RERENDER  - because its changing the value by reference. 
Even if we set it with a new object, we need to trigger the setState() method.
The setState method is only available to the react component, so how do we share a global state with other react components?

## IF we DO use a proxy that triggers a custom event that then manually invokes a setState() with a a whole new object.
1. [state, setState] = useState(store.obj1.state);
2. store.obj1.state = new Object()
3. store.obj1.set()
4. global.dispatchEvent('obj1');
5. addEventListener('obj1') > setState(store.obj1.state)}
6. [state, setState] = useState(store.obj1.state);


# Examples:

1. ## Create store as a proxy
```js

interface PropStore {
  state: {
    count: number;
  }
}

const store =  {
  obj1: new Proxy<PropStore>({
    state: {
      count: 0
    }
  }, {
  //                        obj1,   state, {}
    set: function setProxy (target, key, val) {
      // obj1[state] = {...}
      target[key as keyof typeof target] = val;
      const myEvent = new CustomEvent('obj1', {
        detail: val,
        bubbles: true,
        cancelable: true,
        composed: false
      });
      global.dispatchEvent(myEvent);
      return target[key as keyof typeof target];
    }
  })
}
```

2. ## Trigger a change on the proxy
```ts
const triggerObj1Change = () => {
  store.obj1.state = { // Set the proxy obj1.state to a new object (not a literal )
    ...store.obj1.state,
    count: store.obj1.state.count + 1
  }
}
```

3. ## Create an Event listener in the react component to update its local state
```tsx
export default function Home() {
  const [state, setState] = useState(store.obj1.state);
  useEffect(() => {
    const cb = () => {
      setState(store.obj1.state); 
    }

    (global as any).addEventListener('obj1', cb);
    return () => {
      (global as any).removeEventListener('obj1', cb);
    }
  }, []);

  return (
    <main>
      <button onClick={triggerObj1Change}>Trigger count increase</button>
      <p>count = {state.count}</p>
    </main>
  )
}
```

done!