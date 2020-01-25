import React from 'react'
import classes from './DetailComponent.module.css'

export default (props)=>{
    import(`../../../ComponentLib/${props.meta.name}/index.js`).then((file)=>{
        file.default()
        console.log(file, 'starting the file')
    })
    return(
        <div id="output" className={classes.DetailComponent}>
        </div>
    )
}