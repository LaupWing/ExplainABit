import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'

import Overview from './containers/Overview/Overview'
import Detail from './containers/Detail/Detail'
import ErrorPage from './containers/ErrorPage/ErrorPage'
class App extends Component{
    render(){
        return(   
            <div id="App">
                <Layout>
                    <Switch>
                        <Route path="/detail/:id" component={Detail}/>
                        <Route exact path="/" component={Overview}/>
                        <Route component={ErrorPage}/>
                        <Redirect to="/"/>
                    </Switch>
                </Layout>
            </div>
        )
    }
}

export default App
