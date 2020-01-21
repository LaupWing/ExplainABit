import React, {Suspense, lazy} from 'react'


export default (props)=>{
    const CardComponent = lazy(()=>import(`./ComponentLib/${props.meta.name}/${props.meta.name}`))
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <CardComponent/>
            </Suspense>
            {/* {props.meta.name} */}
        </div>
    )
}