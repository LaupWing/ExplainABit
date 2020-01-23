import React from 'react'
import classes from './DetailCode.module.css'
import codes from '../../../ComponentLib/codes'
import Highlight from 'react-highlight'

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
            <li onClick={()=>props.clicked(code)} className={classes[liClasses]} key={code.fileName}>{code.fileName}</li>
        )
    })
    
    const code = props.activeFile ? componentCode.codes.find(c=>c.fileName===props.activeFile.fileName) : null

    return(
        <div className={classes.DetailCode}>
            <nav className={classes.FileNav}>{fileNav}</nav>
            <main>
                {props.activeFile && 
                    <Highlight language="javascript">
                        {`function foo() { return 'bar' }`}
                    </Highlight>
                }
            </main>
        </div>
    )
}