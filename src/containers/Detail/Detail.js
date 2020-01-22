import React, {Component} from 'react'
import {connect} from 'react-redux'
import Aux from '../../hoc/Auxilliry/Auxilliry'
import {Redirect} from 'react-router-dom'

class Detail extends Component{
    render(){
        let detailContent = <Redirect to='/'/>
        if(this.props.detail){
            detailContent = (<Aux>
                <h2><span>Name:</span>{this.props.detail.name}</h2>
                <p>{this.props.detail.description}</p>
            </Aux>)
        }
        return(
            <Aux>
                {detailContent}
            </Aux>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        detail: state.detail
    }
}

export default connect(mapStateToProps)(Detail)