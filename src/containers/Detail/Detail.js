import React, {Component} from 'react'
import {connect} from 'react-redux'
import Aux from '../../hoc/Auxilliry/Auxilliry'
import {Redirect} from 'react-router-dom'
import DetailReadme from './DetailReadme/DetailReadme'
import classes from './Detail.module.css'
import DetailComponent from './DetailComponent/DetailComponent'

class Detail extends Component{
    state={
        readme: null
    }

    componentDidMount(){
        this.getReadme()
    }
    
    getReadme(){
        if(!this.props.match.params) return
        const readmePath = require(`./READMEs/${this.props.match.params.id}.md`)
        fetch(readmePath)
            .then(response=>response.text())
            .then(txt=>{
                this.setState({
                    readme: txt
                })
            })
    }

    render(){
        const metaData = this.props.meta.find(meta=>meta.name===this.props.match.params.id)
        return(
            <Aux>
                {   metaData
                    ?   <Aux>
                            <h2><span>Name:</span>{metaData.name}</h2>
                            <p>{metaData.description}</p>
                            <main className={classes.DetailContent}>
                                <DetailReadme
                                    readme={this.state.readme}
                                />
                                <DetailComponent
                                    meta={metaData}
                                />
                            </main>
                        </Aux>
                    :   <Redirect to='/'/>
                }
            </Aux>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        meta: state.componentMeta
    }
}

export default connect(mapStateToProps)(Detail)