import React, {Component} from 'react'
import classes from './BasicRedux.module.css'
import {connect} from 'react-redux'

class App extends Component{
    
    render(){
        return (
            <div className={classes[this.props.name]}>
                <h3>{this.props.title} {this.props.counter}</h3>
                <div className={classes.buttons}>
                    <button onClick={this.props.onIncrement}>Add 1</button>
                    <button onClick={()=>this.props.addXAmount(5)}>Add 5</button>
                    <button onClick={this.props.onDecrement}>Remove 1</button>
                    <button onClick={()=>this.props.onDecrementX(5)}>Remove 5</button>
                </div>
            </div>)
    }
}

const mapStateToProps = (state)=>{
    return{
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