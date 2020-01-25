import React from 'react';
import ReactDOM from 'react-dom';

const init = (cardContainer)=>{
    const axios =(
        <div>
            Axios
        </div>
    )
    if(cardContainer){
        console.log(cardContainer)
        ReactDOM.render(axios, cardContainer.current);
    }else{
        ReactDOM.render(axios, document.getElementById('output'));
    }
}
export default init