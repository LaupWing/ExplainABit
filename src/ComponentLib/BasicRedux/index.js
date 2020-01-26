import React from 'react';
import ReactDOM from 'react-dom';
import classes from './BasicRedux.module.css'


const init = (cardContainer, name)=>{
    const BasicRedux =(
        <div className={classes[name]}>
            <h3>Result:10</h3>
            <div className={classes.buttons}>
                <button>Add 1</button>
                <button>Add 5</button>
                <button>Remove 1</button>
                <button>Remove 5</button>
            </div>
        </div>
    )
    ReactDOM.render(BasicRedux, cardContainer);
}
export default init