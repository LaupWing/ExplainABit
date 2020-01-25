import React from 'react';
import ReactDOM from 'react-dom';
import classes from './BasicRedux.module.css'

const BasicRedux =(
    <div>
        <h3>Result:10</h3>
        <div className={classes.buttons}>
            <button>Add 1</button>
            <button>Add 5</button>
            <button>Remove 1</button>
            <button>Remove 5</button>
        </div>
    </div>
)

const init = (cardContainer)=>{
    if(cardContainer){
        ReactDOM.render(BasicRedux, cardContainer.current);
    }else{
        ReactDOM.render(BasicRedux, document.getElementById('output'));
    }
}
export default init