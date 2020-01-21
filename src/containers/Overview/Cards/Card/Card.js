import React, {Suspense, lazy} from 'react'
import moment from 'moment'
import classes from './Card.module.css'

export default (props)=>{
    const CardComponent = lazy(()=>import(`./ComponentLib/${props.meta.name}/${props.meta.name}`))
    const daysAgo = moment(props.date).fromNow() === 'a few seconds ago' ? 'today' : moment(props.date).fromNow()
    
    return (
        <div className={classes.Card}>
            <div className={classes.content}>
                <header>
                    <h2 className='name'>{props.meta.name}</h2>
                    <h2 className={classes.added}><span>Added: </span>{daysAgo}</h2>
                </header>
                <Suspense fallback={<div>Loading...</div>}>
                    <CardComponent/>
                </Suspense>
            </div>
        </div>
    )
}