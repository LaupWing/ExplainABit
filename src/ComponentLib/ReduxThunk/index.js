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