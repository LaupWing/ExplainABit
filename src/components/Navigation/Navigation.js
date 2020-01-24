import React from 'react'
import classes from './Navigation.module.css'
import Searchbar from './Searchbar/Searchbar'
import Logo from '../Logo/Logo'
import Items from './Items/Items'
import {Link} from 'react-router-dom'

export default ()=>(
    <nav className={classes.Navigation}>
        <div className={classes.left}>
            <Link to="/">
                <Logo logoType='nav'/>
            </Link>
            <Searchbar/>
        </div>
        <Items/>
    </nav>
)