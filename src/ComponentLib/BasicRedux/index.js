import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './store/reducer'
import BasicRedux from './App'
const init = (cardContainer, name)=>{

    const store = createStore(reducer)
    // const BasicRedux =(
    //     <div className={classes[name]}>
    //         <h3>Result:10</h3>
    //         <div className={classes.buttons}>
    //             <button>Add 1</button>
    //             <button>Add 5</button>
    //             <button>Remove 1</button>
    //             <button>Remove 5</button>
    //         </div>
    //     </div>
    // )
    ReactDOM.render(<Provider store={store}><BasicRedux name={name}/></Provider>, cardContainer);
}
export default init