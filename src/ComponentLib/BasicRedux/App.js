import React, {Component} from 'react'
import classes from './BasicRedux.module.css'
import {connect} from 'react-redux'

class App extends Component{
    
    render(){
        return (
            <div className={classes[this.props.name]}>
                <h3>Result: {this.props.counter}</h3>
                <div className={classes.buttons}>
                    <button>Add 1</button>
                    <button>Add 5</button>
                    <button>Remove 1</button>
                    <button>Remove 5</button>
                </div>
            </div>)
    }
}

const mapStateToProps = (state)=>{
    return{
        counter: state.counter
    }
}

export default connect(mapStateToProps)(App)