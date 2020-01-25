import React from 'react'
import classes from './DetailCode.module.css'
import codes from '../../../ComponentLib/codes'
import Highlight from 'react-highlight'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Loader from '../../../components/UI/Loader/Loader'
import codesIndex from '../../../ComponentLib/codesIndex'

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

    let code = null

    console.log(codesIndex[props.meta.name])

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
        code = findCodeActiveFile.type === 'jsx'
            ? (
                <Highlight className={findCodeActiveFile.type}>
                    {tabFixed}
                </Highlight>
            )
            : (
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