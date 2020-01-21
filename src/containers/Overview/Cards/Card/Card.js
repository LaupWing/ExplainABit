import React, {Component,Suspense, lazy} from 'react'
import moment from 'moment'
import classes from './Card.module.css'
import Button from '../../../../components/UI/Button/Button'

export default class extends Component{
    state={
        showDescription: false,
        hidingClass: 'show'
    }
    toggleDescription=()=>{
        if(this.state.showDescription){
            // this.setState({
            //     hidingClass: 'hide'
            // })
        }
        this.setState({
            showDescription: !this.state.showDescription
        })
    }
    animationEndHandler= (e)=>{
        console.log('animationended',e)
    }
    render(){
        const CardComponent = lazy(()=>import(`./ComponentLib/${this.props.meta.name}/${this.props.meta.name}`))
        const daysAgo = moment(this.props.date).fromNow() === 'a few seconds ago' ? 'today' : moment(this.props.date).fromNow()
        return (
            <div className={classes.Card}>
                <div className={classes.content}>
                    <header>
                        <h2 className='name'>{this.props.meta.name}</h2>
                        <h2 className={classes.added}><span>Added: </span>{daysAgo}</h2>
                    </header>
                    
                    {!this.state.showDescription
                        ?   <div className={classes.componentContainer}>
                                <Suspense fallback={<div>Loading...</div>}>
                                    <CardComponent/>
                                </Suspense>
                            </div>
                        :   <div 
                                className={`${classes.description} ${classes[this.state.hidingClass]}`}
                                onAnimationEnd={this.animationEndHandler}
                            >
                            <p>{this.props.meta.description}</p>
                        </div>
                    }
                    <Button 
                        btnType={!this.state.showDescription ? 'showDescription' : 'hideDescription'}
                        clicked={this.toggleDescription}
                    >
                        {!this.state.showDescription ? 'Show description' : 'Hide description'}
                    </Button>
                </div>
            </div>
        )
    }
}