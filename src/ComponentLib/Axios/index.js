import React from 'react';
import ReactDOM from 'react-dom';

const init = (cardContainer, name)=>{
    const axios =(
        <div className={name}>
            Axios
        </div>
    )
    ReactDOM.render(axios, cardContainer);
}
export default init