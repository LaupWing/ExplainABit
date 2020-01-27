# Basic Redux

> A library where you can hold a global state

## This project
This project is really basic. You have total four buttons each adding or subtracting an x amount of the result. This adding and subtracting is handled from within redux.

## Folder structure
-   📁 store
    -   📄 reducer.js
-   📄 App.js
-   📄 Index.js
-   📄 BasicRedux.module.css

## Code explaination

### Reducer (store/reducer.js)
In the reducer you have to define the shared state of your app. In the reducer arrow function you have 2 parameters first the state itself and second the action.
``` javascript
const reducer = (state=initialState, action)=>{
``` 
The state is always the current state of your application. What you usually do is set an initials state in the parameters to define your state starting point.

Action, or rather actions are the action/actions you want to perform on your state. These actions are defined by you and these actions tells the reducer what to do with the data in the state.

### Connect Reducer to redux (index.js)
The reducer that you have created needs to be connected to the root of your app to in able to use it with your app. In order to connect redux with your app you need another package called `react-redux`.

First you need to create a store with the `createStore` method from the `redux` library. This does what it saids. It creates your first redux store!
```javascript
const store = createStore(reducer)
```

To connect your store with react you need to get the `Provider` component from the `react-redux` library. This `Provider` component always needs a store prop and has to wrap around the component where you want to use this redux store. Most of the time you want to wrap your whole App in this `Provider` component.

```javascript
const store = createStore(reducer)
ReactDOM.render(
    <Provider store={store}>
        <BasicRedux name={name}/>
    </Provider>, cardContainer);
```

### Use the store in the Components (App.js)
In order to use the store in the component you want. You need to connect your redux store first with the component you want to use it in. To do this you need to import the `connect` methods from the `react-redux` library

In the connect you have two parameters. First is the state you want and second is the actions. Both of these parameters are functions which returns an object with the action/state you want to use in the component. The action is a little diffrent. In the action function function you get a parameter called `dispatch` which dispatches a action, which eventually changes something in the state.

Both the state and dispatch you have declared can be found in the props of the component, with the name you have declared in the return object.

And in the return function of the connect you wrap the component.

```javascript
const mapStateToProps = (state)=>{
    return{
    // store the counter of the state in the props.counter of this component
        counter: state.counter,
        title: state.message
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        addXAmount: (value) => dispatch({type: 'ADDXAMOUNT', value}),
        onDecrement: () => dispatch({type: 'DECREMENT'}),
        onDecrementX: (value) => dispatch({type: 'DECREMENTXAMOUNT', value})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
```