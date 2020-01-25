import React from 'react'
import classes from './DetailComponent.module.css'

export default (props)=>{
    import(`../../../ComponentLib/${props.meta.name}/index.js`).then((file)=>console.log(file))
    return(
        <div id="output" className={classes.DetailComponent}>
        </div>
    )
}