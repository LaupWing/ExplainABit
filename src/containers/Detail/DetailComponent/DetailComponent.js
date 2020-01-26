import React from 'react'
import classes from './DetailComponent.module.css'

export default React.memo((props)=>{
    import(`../../../ComponentLib/${props.meta.name}/index.js`).then((file)=>{
        console.log('rendering')
        file.default(document.getElementById('output'), 'normalSize')
    })
    return(
        <div id="output" className={`${classes.DetailComponent} component`}>
        </div>
    )
})