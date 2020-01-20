import React from 'react'
import classes from './Navigation.module.css'
import Searchbar from '../Searchbar/Searchbar'

export default (props)=>(
    <nav className={classes.Navigation}>
        <Searchbar/>
    </nav>
)