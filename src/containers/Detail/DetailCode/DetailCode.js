import React from 'react'
import classes from './DetailCode.module.css'
import codes from '../../../ComponentLib/codes'
import Highlight from 'react-highlight'

export default (props)=>{
    const componentCode = codes.find(c=>c.name === props.meta.name)
    const test = require('../DetailReadme/DetailReadme')
    console.log(test)

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
    
    let code = props.activeFile ? componentCode.codes.find(c=>c.fileName===props.activeFile.fileName) : null

    if(props.activeFile){
        let initialWhiteSpace = null 
        const clean = code
            .code.split(/\n/)
            .filter(c=>c!=='')
            .map(c=>{
                const firstChar = c.match('[a-zA-Z]')    
                const index = c.indexOf(firstChar)
                if(!initialWhiteSpace){
                    initialWhiteSpace = index
                }
                const sliceSize = c.length - initialWhiteSpace
                return c.slice(-sliceSize)
            })
            .join("\r\n")
        console.log(clean)
    }
    return(
        <div className={classes.DetailCode}>
            <nav className={classes.FileNav}>{fileNav}</nav>
            <main>
                {props.activeFile && 
                    <Highlight language="javascript">
                        {code.code.trim()}
                    </Highlight>
                }
            </main>
        </div>
    )
}