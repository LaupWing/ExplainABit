import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'

import Overview from './containers/Overview/Overview'
class App extends Component{
    render(){
        return(   
            <div id="App">
                <Layout>
                    <Switch>
                        <Route path="/" component={Overview}/>
                    </Switch>
                </Layout>
            </div>
        )
    }
}

export default App
