import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './store/reducer'
import ReduxThunk from './App'

const init = (cardContainer, name)=>{
    const store = createStore(reducer)
    ReactDOM.render(
        <Provider store={store}>
            <ReduxThunk name={name}/>
        </Provider>, cardContainer);
}

export default init