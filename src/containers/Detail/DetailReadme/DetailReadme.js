import React from 'react'
import ReactMarkdown from 'react-markdown'
import classes from './DetailReadme.module.css'
import CodeBlock from './CodeBlock'
import Loader from '../../../components/UI/Loader/Loader'
export default (props)=>{
    if(props.readme){
        return(
            <div className={classes.DetailReadme}>
                <ReactMarkdown 
                    source={props.readme}
                    renderers={{
                        code: CodeBlock
                    }}
                />
            </div>
        )
    }else{
        return (
            <div className={[classes.DetailReadme, classes.loading].join(' ')}>
                <Loader/>
            </div>
        )
    }
}