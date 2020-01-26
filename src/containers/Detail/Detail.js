import React, {Component} from 'react'
import {connect} from 'react-redux'
import Aux from '../../hoc/Auxilliry/Auxilliry'
import {Redirect} from 'react-router-dom'
import DetailReadme from './DetailReadme/DetailReadme'
import classes from './Detail.module.css'
import DetailComponent from './DetailComponent/DetailComponent'
import DetailCode from './DetailCode/DetailCode'
import codeIndex from '../../ComponentLib/codesIndex'

class Detail extends Component{
    state={
        readme: null,
        codes: codeIndex[this.props.match.params.id],
        activeFile: null
    }

    componentDidMount(){
        this.getReadme()
        this.setState({
            activeFile : this.state.codes[0]
        })
    }

    setActiveFile=(file)=>{
        this.setState({
            activeFile : file
        })
    }
    
    getReadme(){
        if(!this.props.match.params) return
        const name = this.props.match.params.id
        const readmePath = require(`../../ComponentLib/${name}/README.md`)
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
                            <h2><span className={classes.title}>Name: </span>{metaData.name.replace(/([A-Z])/g, ' $1').trim()}</h2>
                            <p>{metaData.description}</p>
                            <main className={classes.DetailContent}>
                                <DetailReadme
                                    readme={this.state.readme}
                                />
                                <div className={classes.rightCol}>
                                    <DetailComponent
                                        meta={metaData}
                                    />
                                    <DetailCode
                                        meta={metaData}
                                        activeFile={this.state.activeFile}
                                        clicked={this.setActiveFile}
                                    />
                                </div>
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