import React, {Component} from 'react'
import * as actionCreators from './actions/todos'
import {connect} from 'react-redux'
class App extends Component{

    render(){
        const list = this.props.list.map(post=>{
            console.log(post)
        })
        return(
            <div>
                <button onClick={this.props.fetchPosts}>Fetch</button>
                <ul>
                    {list}
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
        list: state.posts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)