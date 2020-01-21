import React, {Component} from 'react'
import {connect} from 'react-redux'
import Cards from './Cards/Cards'

class Overview extends Component{

    render(){
        return(
            <div>
                <h2>Latest React Mini Projects</h2>
                <p>My personal archive of react concepts. Feel free to use some of it for your own project</p>
                <Cards 
                    componentMeta={this.props.componentMeta}
                />
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