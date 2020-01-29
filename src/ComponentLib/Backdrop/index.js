
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const init = (cardContainer, name)=>{
    ReactDOM.render(
        <App name={name}/>
    , cardContainer);
}

export default init

