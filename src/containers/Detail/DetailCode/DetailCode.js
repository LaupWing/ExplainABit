import React from 'react'
import classes from './DetailCode.module.css'
import Highlight from 'react-highlight'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Loader from '../../../components/UI/Loader/Loader'
import codesIndex from '../../../ComponentLib/codesIndex'

export default (props)=>{
    let code = null
    if(props.activeFile && codesIndex[props.meta.name]){
        const fileNav = codesIndex[props.meta.name].map(code=>{
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
        const findCodeActiveFile = codesIndex[props.meta.name].find(c=>c.fileName===props.activeFile.fileName)
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
        return(
            <div className={classes.DetailCode}>
                <nav className={classes.FileNav}>{fileNav}</nav>
                <main>
                    {code}
                </main>
            </div>
        )
    }else {
        return (
            <div className={classes.DetailCode}>
                <nav className={classes.FileNav}><li>Loading</li></nav>
                <main className={classes.centering}>
                    <Loader/>
                </main>
            </div>
        )
    }
}