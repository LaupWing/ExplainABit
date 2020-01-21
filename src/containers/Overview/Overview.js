import React, {Component} from 'react'
import {connect} from 'react-redux'

class Overview extends Component{

    render(){
        return(
            <div>
                <h2>Latest React Mini Projects</h2>
                <p>My personal archive of react concepts. Feel free to use some of it for your own project</p>
            </div>
        )
    }
}

const mapStatesToProps =(state)=>{
    return{
        componentMeta: state.componentMeta
    }
}

export default connect(mapStatesToProps)(Overview)