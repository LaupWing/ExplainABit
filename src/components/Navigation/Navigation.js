import React from 'react'
import classes from './Navigation.module.css'
import Searchbar from './Searchbar/Searchbar'
import Logo from '../Logo/Logo'

export default ()=>(
    <nav className={classes.Navigation}>
        <div className={classes.left}>
            <Logo logoType='nav'/>
            <Searchbar/>
        </div>
    </nav>
)