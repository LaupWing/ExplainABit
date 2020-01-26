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