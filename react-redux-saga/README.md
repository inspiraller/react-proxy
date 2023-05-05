# Comparing redux Saga with native javascript proxys

This project shows the difference between the use of redux saga v native javascript proxies.
Both will share a code structure as redux reducers and actions. 
There are a few differences to show the inner workings between them.
Both hide the data in a local variable relative to the project.
In this example there is an additional function which persists the data into local Storage, but that is optional.

# Native proxies advantage:
- more peformant ( Since each dispatch does not have to go through a centralised function with lots of if conditions)
- Smaller size (since you don't have to download anything)
- optional trigger of passing the data into events or not.
- Less boilerplate

***Notes:***
- Can convert to a generator like function if desired for redux saga like side effects.

# Redux saga advantage:
- data is immutable and more familiar to redux users
- plugins like chrome redux addon will automatically display the redux data
- large awareness

