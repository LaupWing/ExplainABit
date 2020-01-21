import React from 'react'
import Item from './Item/Item'
import classes from './Items.module.css'

export default ()=>(
    <ul className={classes.Items}>
        <Item>
            Contact
        </Item>
        <Item>
            Questions
        </Item>
        <Item itemType='higlight'>
            News
        </Item>
    </ul>
)