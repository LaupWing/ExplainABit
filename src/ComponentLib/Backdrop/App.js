
import React, {Component} from 'react'
import classes from './Backdrop.module.css'
import Backdrop from './Backdrop'
class App extends Component{
    state={
        show: false
    }
    render(){
        return(
            <div className={classes.App}>
                <Backdrop show={this.state.show} clicked={()=>this.setState({show:false})}/>
                <button onClick={()=>this.setState({show:true})}>Show Backdrop</button>
            </div>
        )
    }
}

export default App
