import React, {Component} from 'react'
import {connect} from 'react-redux'
import Aux from '../../hoc/Auxilliry/Auxilliry'
import {Redirect} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
class Detail extends Component{
    state={
        readme: null
    }

    componentDidMount(){
        this.getReadme()
    }
    
    getReadme(){
        if(!this.props.detail) return
        const readmePath = require(`./READMEs/${this.props.detail.name}.md`)
        fetch(readmePath)
            .then(response=>response.text())
            .then(txt=>{
                
                this.setState({
                    readme: <ReactMarkdown source={txt}/>
                },()=>{
                    console.log(this.state.readme)
                })
            })
    }

    render(){
        return(
            <Aux>
                {   this.props.detail
                    ?   <Aux>
                            <h2><span>Name:</span>{this.props.detail.name}</h2>
                            <p>{this.props.detail.description}</p>
                            {this.state.readme}
                        </Aux>
                    :   <Redirect to='/'/>
                }
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