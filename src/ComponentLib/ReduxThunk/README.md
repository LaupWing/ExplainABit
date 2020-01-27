# Redux Thunk 

> A library where you can use asychronous code with redux

## This project
This projects simply fetches some data from the jsonplaceholder api and displays them in an unorderd list. 

## Folder structure
-   📁 store
    -   📄 reducer.js
-   📁 actions
    -   📄 posts.js
-   📄 App.js
-   📄 index.js
-   📄 ReduxThunk.module.css

## Code explaination

### Setting up thunk (index.js)
The first thing you do is setting up your basic redux environment. I dont explain the setup for redux here for the explaination about redux you can [click here](https://www.google.com). 

When your redux environment is ready you can install the redux library (ofcourse you can do this before, it doesnt really matter). Import `thunk` from `redux-thunk`


```javascript
import thunk from 'redux-thunk'
```

To add `thunk` to your store you need to also import the `applyMiddleware` method from the `redux` library. The `applyMiddleware` registers the middleware you want to use in conjunction with the store. The `applyMiddleware` has to be passed as a second parameter in the `createStore` method and invoke it with `thunk` as your parameter.
```javascript
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'

const store = createStore(reducer, applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store}>
        <ReduxThunk name={name}/>
    </Provider>, cardContainer);
```

### Using thunk to use asynchronous code (actions/todos.js)
After you registered thunk as a middleware in you the file where you have your store, you can delay your dispatches to fetch some data or some other asynchronous actions. A best practice with using thunk is storing all your actions in another file. The `redux-thunk` gives your actions behind the scene an `dispatch` method, which you can call later in order to dispatch an action when your asynchronous code has finished.

As you can see below the action is now seperated and is only activated when the asynchronous code is finished. In the example below the `fetchPosts` function is called from within the app and will dispatch the `onInitPosts` in the future when the fetching of data is finished. The dispatch method is giving by `redux-thunk` behind the scenes.

```javascript
export const onInitPosts = (value) =>{
    return{
        type: 'INITPOSTS',
        value
    }
}
            
export const fetchPosts = () =>{
    return dispatch =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                const splitted = json.slice(0,20)
                return dispatch(onInitPosts(splitted))
            })
    }
}
```

### Triggering the fetchPosts in the app (App.js)
Triggering the redux action is exactly the same as in your basic redux. Just register the dispatch function you want to your app with `connect` and just use activate the function when needed in your app from the `props` property.
```javascript 

class App extends Component{
            
    render(){
        const posts = this.props.posts.map((post,i)=>{
            return (
                <div key={i}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            )
        })
        return(
            <div className={classes.ReduxThunk}>
                <button onClick={this.props.fetchPosts}>Fetch</button>
                <ul>
                    {posts}
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchPosts: ()=> dispatch(actionCreators.fetchPosts())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
``` 