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