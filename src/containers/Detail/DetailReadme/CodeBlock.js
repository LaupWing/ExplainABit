import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default (props)=>{
    let language
    let value
    if(props.language){
        language = props.language
        value = props.value
    }
    return(
        <SyntaxHighlighter language={language} style={atelierCaveDark}>
            {value}
        </SyntaxHighlighter>
    )
}