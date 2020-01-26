
export default [
    {
        type: 'jsx',
        fileName: 'App.js',
        code: `
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
        `
    },
    {
        type: 'javascript',
        fileName: 'store/reducer.js',
        code:`
            const initialState = {
                counter: 0,
                message: 'Result: '
            }
            
            const reducer = (state=initialState, action)=>{
                console.log(action)
                switch(action.type){
                    case 'INCREMENT':
                        return {
                            ...state,
                            counter: state.counter + 1
                        }
                    case 'ADDXAMOUNT':
                        return {
                            ...state,
                            counter: state.counter + action.value
                        }
                    case 'DECREMENT':
                        return{
                            ...state,
                            counter: state.counter - 1
                        }
                    case 'DECREMENTXAMOUNT':
                        return {
                            ...state,
                            counter: state.counter - action.value
                        }
                    default: return state
                }
            }
            
            export default reducer
        `
    },
    {
        type: 'jsx',
        fileName: 'index.js',
        code: `
            import React from 'react';
            import ReactDOM from 'react-dom';
            import {createStore} from 'redux'
            import {Provider} from 'react-redux'
            import reducer from './store/reducer'
            import BasicRedux from './App'
            
            // #### This init is a wrapper specific for this website 
            // #### just overlook the init wrapper part
            
            const init = (cardContainer, name)=>{
                const store = createStore(reducer)
                ReactDOM.render(
                    <Provider store={store}>
                        <BasicRedux name={name}/>
                    </Provider>, cardContainer);
            }
            
            export default init
        `
    },
    {
        type: 'css',
        fileName: 'main.css',
        code: `
            .buttons{
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
            }
            .scaledDown button{
                margin: 2px;
            }
            .normalSize{
                height: 100%;
            }
            .normalSize button{
                margin: 10px;
            }
        `
    }
]