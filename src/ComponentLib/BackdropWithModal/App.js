
import React, {Component} from 'react'
import classes from './BackdropWithModal.module.css'
import Modal from './Modal/Modal'

class App extends Component{
    state={
        showModal: false
    }


    render(){
        return(
            <div className={classes.App}>
                <Modal
                    show={this.state.showModal}
                    modalClose={()=>this.setState({showModal:false})}
                >
                    {this.state.showModal ? 'A MODAL' : ''}
                </Modal>
                <button onClick={()=>this.setState({showModal:true})}>Show Modal</button>
            </div>
        )
    }
}

export default App
