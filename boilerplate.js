const readme =`
# Name

> Short description

## This project

## Folder structure
-   📁 folder
-   📄 file

## Code explaination
`

const indexjs =`
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const init = (cardContainer, name)=>{
    ReactDOM.render(
        <App name={name}/>
    , cardContainer);
}

export default init

`
const codes =`
export default [
    {
        type: 'javascript',
        fileName: 'example.js',
        code: \`
            put ya code here   
        \`
    },
]

`
const app =`
import React, {Component} from 'react'

class App extends Component{

    render(){
        return(
            <div>
                <h1>Your App</h1>
            </div>
        )
    }
}

export default App
`

module.exports ={
    app,
    codes,
    indexjs,
    readme
}