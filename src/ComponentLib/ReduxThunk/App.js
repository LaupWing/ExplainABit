import React, {Component} from 'react'
import * as actionCreators from './actions/todos'
import {connect} from 'react-redux'
class App extends Component{
    render(){
        return(
            <div>
                <button>Fetch</button>
                <ul>
                    <li></li>
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchPosts: dispatch(actionCreators.fetchPosts())
    }
}

export default connect(null, mapDispatchToProps)(App)