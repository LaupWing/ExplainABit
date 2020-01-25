import React from 'react';
import ReactDOM from 'react-dom';

const init = (cardContainer)=>{
    const BasicRedux =(
        <div>
            BasicRedux
        </div>
    )
    if(cardContainer){
        ReactDOM.render(BasicRedux, cardContainer.current);
    }else{
        ReactDOM.render(BasicRedux, document.getElementById('output'));
    }
}
export default init