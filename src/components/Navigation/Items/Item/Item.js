import React from 'react'
import classes from './Item.module.css'

export default (props)=>(
    <li className={[classes.Item, classes[props.itemType]].join(' ')}>
        {props.children}
    </li>
)