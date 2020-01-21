import React, {Component} from 'react'
import {connect} from 'react-redux'
import Aux from '../../hoc/Auxilliry/Auxilliry'

class Detail extends Component{
    render(){
        console.log(this.props)
        return(
            <Aux>
                <h2>Detail</h2>
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