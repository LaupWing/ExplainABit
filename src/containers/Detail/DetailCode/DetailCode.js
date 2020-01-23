import React from 'react'
import classes from './DetailCode.module.css'
import codes from '../../../ComponentLib/codes'

export default (props)=>{
    const componentCode = codes.find(c=>c.name === props.meta.name)
    
    const fileNav = componentCode.codes.map(code=>{
        let liClasses = null
        if(props.activeFile){
            if(props.activeFile.fileName === code.fileName){
                liClasses = 'active'
            }
        }
        return (
            <li className={classes[liClasses]} key={code.fileName}>{code.fileName}</li>
        )
    })
    return(
        <div className={classes.DetailCode}>
            <nav className={classes.FileNav}>{fileNav}</nav>
        </div>
    )
}