
export default [
    {
        type: 'jsx',
        fileName: 'Modal/Modal.js',
        code: `
        import React from 'react'
        import Backdrop from '../Backdrop/Backdrop'
        import styles from './Modal.module.css'
        
        export default (props)=>{
            return(
                <React.Fragment>
                    <Backdrop clicked={props.modalClose} show={props.show}/>
                    <div 
                        className={styles['Modal']}
                        style={{
                            transform: props.show ? 'translateY(0)' : 'translateY(-500%)',
                            opacity: props.show ? '1' : '0'
                        }} 
                    >
                        {props.children}
                    </div>
                </React.Fragment>
            )
        }
        `
    },
    {
        type: 'css',
        fileName: 'Modal/Modal.module.css',
        code: `
        .Modal{
            position: absolute;
            z-index: 500;
            background-color: white;
            width: 70%;
            border: 1px solid #ccc;
            box-shadow: 1px 1px 1px black;
            padding: 16px;
            left: 15%;
            top: 30%;
            box-sizing: border-box;
            transition: all 0.3s ease-out;
        }
        `
    },
    {
        type: 'jsx',
        fileName: 'Backdrop/Backdrop.js',
        code: `
        import React from 'react'
        import styles from './Backdrop.module.css'
        export default (props)=>(
            props.show? <div className={styles['Backdrop']} onClick={props.clicked}>

            </div>:null
        )
        `
    },
    {
        type: 'css',
        fileName: 'Backdrop/Backdrop.module.css',
        code: `
        .Backdrop{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left:0;
            background-color: rgba(0,0,0,.5);
            background-color: rgba(0,0,0,.5);
        }
        `
    },
    {
        type: 'jsx',
        fileName: 'App.js',
        code: `
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
        `
    },
]

