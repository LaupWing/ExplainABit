
import React, {Component} from 'react'
import classes from './BackdropWithModal.module.css'

class App extends Component{
    state={
        showModal: false
    }
    render(){
        return(
            <div className={classes.App}>
                <button>Show Modal</button>
            </div>
        )
    }
}

export default App
