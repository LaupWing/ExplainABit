import React, {Suspense, lazy} from 'react'
import classes from './DetailComponent.module.css'

export default (props)=>{
    // const Component = lazy(()=>import(`../../../ComponentLib/${props.meta.name}/${props.meta.name}`))
    import(`../../../ComponentLib/${props.meta.name}/index.js`).then(()=>console.log('teset'))
    return(
        <div id="output" className={classes.DetailComponent}>
            {/* <Suspense fallback={<div>Loading...</div>}>
                <Component/>
            </Suspense> */}
        </div>
    )
}