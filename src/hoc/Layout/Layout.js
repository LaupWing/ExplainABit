import React, {Component} from 'react'
import Aux from '../Auxilliry/Auxilliry'
import classes from './Layout.module.css'
import Searchbar from '../../components/Searchbar/Searchbar'
class Layout extends Component{
    render(){
        return(
            <Aux>
                <Searchbar/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}
export default Layout 