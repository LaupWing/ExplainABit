import React from 'react'
import classes from './Navigation.module.css'
import Searchbar from './Searchbar/Searchbar'
import Logo from '../Logo/Logo'
import Items from './Items/Items'
export default ()=>(
    <nav className={classes.Navigation}>
        <div className={classes.left}>
            <Logo logoType='nav'/>
            <Searchbar/>
        </div>
        <Items/>
    </nav>
)