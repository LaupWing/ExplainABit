import React from 'react'
import classes from './DetailCode.module.css'
import codes from '../../../ComponentLib/codes'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


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

    let code = null

    if(props.activeFile){
        const findCodeActiveFile = componentCode.codes.find(c=>c.fileName===props.activeFile.fileName)
        let initialWhiteSpace = null 
        const tabFixed = findCodeActiveFile
            .code.split(/\n/)
            .filter(c=>c!=='')
            .map(c=>{
                const firstChar = c.match('[a-zA-Z<]')    
                const index = c.indexOf(firstChar)
                if(!initialWhiteSpace){
                    initialWhiteSpace = index
                }
                const sliceSize = c.length - initialWhiteSpace
                return c.slice(-sliceSize)
            })
            .join("\r\n")
            
        code = (
            <SyntaxHighlighter language={findCodeActiveFile.type} style={atelierCaveDark}>
                {tabFixed}
            </SyntaxHighlighter>
        )
    }
    return(
        <div className={classes.DetailCode}>
            <nav className={classes.FileNav}>{fileNav}</nav>
            <main>
                {code}
            </main>
        </div>
    )
}