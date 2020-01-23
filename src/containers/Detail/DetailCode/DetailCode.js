import React from 'react'
import classes from './DetailCode.module.css'
import codes from '../../../ComponentLib/codes'

export default (props)=>{
    const componentCode = codes.find(c=>c.name === props.meta.name)
    console.log(componentCode)
    return(
        <div className={classes.DetailCode}>
            code
        </div>
    )
}