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
    
    const code = props.activeFile ? componentCode.codes.find(c=>c.fileName===props.activeFile.fileName) : null

    let initialWhiteSpace = null 
    if(props.activeFile){
        const clean = code
            .code.split(/\n/)
            .filter(c=>c!=='')
            .map(c=>{
                console.log(c)
                console.log(c.length, 'c.length')
                const firstChar = c.match('[a-zA-Z]')
                
                const index = c.indexOf(firstChar)
                console.log(index)
                if(!initialWhiteSpace){
                    initialWhiteSpace = index
                }
                const sliceSize = c.length - initialWhiteSpace
                console.log(sliceSize, 'slicesize')
                console.log(c.slice(-sliceSize))
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