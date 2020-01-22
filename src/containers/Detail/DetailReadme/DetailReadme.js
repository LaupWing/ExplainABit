import React from 'react'
import ReactMarkdown from 'react-markdown'
import classes from './DetailReadme.module.css'

export default (props)=>{
    return(
        <div className={classes.DetailReadme}>
            <ReactMarkdown source={props.readme}/>
        </div>
    )
}