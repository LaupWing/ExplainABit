import React, {Component} from 'react'
import Error from '../../components/Error/Error'
import Aux from '../../hoc/Auxilliry/Auxilliry'
import classes from './ErrorPage.module.css'
import {Link} from 'react-router-dom'

class ErrorPage extends Component{

    render(){
        return(
            <Aux>
                <h2>Error 404: Page not found</h2>
                <Link to="/">
                    <p>Go back to the main page</p>
                </Link>
                <div className={classes.svgwrapper}>
                    <Error/>
                </div>
            </Aux>
        )
    }
}

export default ErrorPage