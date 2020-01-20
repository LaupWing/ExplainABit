import React, {Component} from 'react'
import Aux from '../Auxilliry/Auxilliry'
import classes from './Layout.module.css'
import Navigation from '../../components/Navigation/Navigation'
class Layout extends Component{
    render(){
        return(
            <Aux>
                <Navigation/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}
export default Layout 