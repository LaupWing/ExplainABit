import React, {Component} from 'react'
import Card from './Card/Card'
import classes from './Cards.module.css'

export default (props)=>{
    const cards = props.componentMeta.map((meta,index)=>{
        return (
            <Card
                meta={meta}
                key={index}
            />
        )
    })
    return(
        <div className={classes.Cards}>
            {cards}
        </div>
    )
}