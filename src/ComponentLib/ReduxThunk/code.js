
export default [
    {
        type: 'jsx',
        fileName: 'index.js',
        code: `
            import React from 'react';
            import ReactDOM from 'react-dom';
            import {createStore, applyMiddleware} from 'redux'
            import {Provider} from 'react-redux'
            import reducer from './store/reducer'
            import ReduxThunk from './App'
            import thunk from 'redux-thunk'
            
            const init = (cardContainer, name)=>{
                const store = createStore(reducer, applyMiddleware(thunk))
                ReactDOM.render(
                    <Provider store={store}>
                        <ReduxThunk name={name}/>
                    </Provider>, cardContainer);
            }
            
            export default init
        `
    },
    {
        type: 'jsx',
        fileName: 'App.js',
        code: `
            import React, {Component} from 'react'
            import * as actionCreators from './actions/todos'
            import {connect} from 'react-redux'
            import classes from './ReduxThunk.module.css'
            
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
            const mapStateToProps = state =>{
                return{
                    posts: state.posts
                }
            }
            
            export default connect(mapStateToProps, mapDispatchToProps)(App)
        `
    },
    {
        type: 'javascript',
        fileName: 'actions/todos.js',
        code:`
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
        `
    },
    {
        type: 'javascript',
        fileName: 'store/reducers.js',
        code: `
            const initialState = {
                posts: [],
            }
            
            const reducer = (state=initialState, action)=>{
                switch(action.type){
                    case 'INITPOSTS':
                        console.log(action)
                        return{
                            ...state,
                            posts: action.value
                        }
                    case 'ADDPOST':
                        return {
                            ...state,
                            posts: state.posts.concat(action.value)
                        }
                    default: return state
                }
            }
            
            export default reducer
        `
    }
]