import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'

import Overview from './containers/Overview/Overview'
import Detail from './containers/Detail/Detail'

class App extends Component{
    render(){
        return(   
            <div id="App">
                <Layout>
                    <Switch>
                        <Route path="/detail/:id" component={Detail}/>
                        <Route exact path="/" component={Overview}/>
                        <Redirect to="/"/>
                    </Switch>
                </Layout>
            </div>
        )
    }
}

export default App
