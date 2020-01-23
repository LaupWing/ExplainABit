import React, {Component,Suspense, lazy} from 'react'
import moment from 'moment'
import classes from './Card.module.css'
import Button from '../../../../components/UI/Button/Button'
import {withRouter} from 'react-router'
import * as actions from '../../../../store/actions/index'
import {connect} from 'react-redux'
class Card extends Component{
    state={
        showDescription: false,
        descriptionClass: ''
    }
    toggleDescription=()=>{
        if(this.state.showDescription){
            this.setState({
                showDescription: false,
                descriptionClass: ''
            })
        }else{
            this.setState({
                showDescription: true,
                descriptionClass: 'show'
            })
        }
    }
    cardClickHandler=(e)=>{
        if(e.target.closest('button')){
            this.toggleDescription()
        }else{
            this.props.history.push(`/detail/${this.props.meta.name}`)
            this.props.onSetDetail(this.props.meta)
        }
    }
    render(){
        const CardComponent = lazy(()=>import(`../../../../ComponentLib/${this.props.meta.name}/${this.props.meta.name}`))
        const daysAgo = moment(this.props.meta.date).fromNow()
        return (
            <div 
                className={classes.Card}
                onClick={this.cardClickHandler}
            >
                <div className={classes.content}>
                    <header>
                        <h2 className='name'>{this.props.meta.name}</h2>
                        <h2 className={classes.added}><span>Added: </span>{daysAgo}</h2>
                    </header>
                    <main>
                        <div 
                            className={`${classes.description} ${classes[this.state.descriptionClass]}`}
                        >
                            <p>{this.props.meta.description}</p>
                        </div>

                        {!this.state.showDescription
                            ?   <div className={classes.componentContainer}>
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <CardComponent/>
                                    </Suspense>
                                </div>
                            :   null
                        }
                    </main>
                    <Button 
                        btnType={!this.state.showDescription ? 'showDescription' : 'hideDescription'}
                    >
                        {!this.state.showDescription ? 'Show description' : 'Hide description'}
                    </Button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        onSetDetail: (cmp) => dispatch(actions.setDetail(cmp))
    }
}

export default connect(null,mapDispatchToProps)(withRouter(Card))