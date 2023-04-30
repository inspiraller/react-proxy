# Basic explanation of proxies to replace redux

1. ## Create a store object 
```ts
const store = {
  obj1: { 
  // # obj1' 
  // It is necessary to have a top level. Example of use:  
  //   store.obj1.something = Will trigger a proxy change.
  //   store.obj1 = Will NOT trigger a proxy change.
  //   (Feel free to rename 'obj1')

    state: {
    // #state
    // Where you would typically declare your properties (similar to redux)

      count: 0
    }
  }
}
```
2.  ## Create a *private* proxy that listens to any change on store.obj1
We don't care to share the _proxied, because all its going to do is observe a change to store.obj1
and then trigger an event. We only care about the event.

```ts
                          {/* --procedural step: 4. store.obj1.something = */}
const _proxied = new Proxy(store.obj1, {

    set: function setProxy (target, key, val) {
      if (target[key] !== val) {
        target[key] = val;
        //                               obj1 is the object we want to observe.
        {/* --procedural step: 5*/}
        const myEvent = new CustomEvent('obj1', {
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
```

3. Create your React component or equivalent
```tsx
const useTodos = () => {
  const [state, setState] = useState(store.obj1.state);

  useEffect(() => {
    const cb = () => {
      // debug: console.log('on event todos', evt)
      {/* --procedural step: 7*/}
      setState(store.obj1.state);
    };
    {/* --procedural step: 6*/}
    global.addEventListener('obj1', cb);
    return () => {
      global.removeEventListener('obj1', cb, true);
    };
  }, []);


  {/* --procedural step: 3*/}
  const triggerChange = () => {    
    store.obj1.state = {
      ...store.obj1.state,
      count: store.obj1.state.count + 1
    }
  }

  return (
    <div>
      {/* --procedural step: 1, step: 8, 15, 22 etc,,,*/}}
      <p>count = {state.count}</p>
       {/* --procedural step: 2*/}
      <button onclick={triggerChange}>Click to increase count</button>
    </div>
    )
    
};
```

# Real world example - use nextjs
1. npx create-next-app@latest react-using-proxies --typescript --use-npm

2. 