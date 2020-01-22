import React, {Suspense, lazy} from 'react'
import classes from './DetailComponent.module.css'
import codes from '../../../ComponentLib/codes'

export default (props)=>{
    const Component = lazy(()=>import(`../../../ComponentLib/${props.meta.name}/${props.meta.name}`))
    const componentCode = codes.find(c=>c.name === props.meta.name)
    console.log(componentCode)
    return(
        <div className={classes.DetailComponent}>
            <Suspense fallback={<div>Loading...</div>}>
                <Component/>
            </Suspense>
        </div>
    )
}