import React, {Suspense, lazy} from 'react'
import classes from './DetailComponent.module.css'

export default (props)=>{
    const Component = lazy(()=>import(`../../../ComponentLib/${props.meta.name}/${props.meta.name}`))
    return(
        <div className={classes.DetailComponent}>
            <Suspense fallback={<div>Loading...</div>}>
                <Component/>
            </Suspense>
        </div>
    )
}