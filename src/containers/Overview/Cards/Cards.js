import React from 'react'
import Card from './Card/Card'

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
        <div>
            {cards}
        </div>
    )
}