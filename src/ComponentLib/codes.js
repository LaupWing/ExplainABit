export default [
    {
        name: 'Axios',
        codes:[
            {
                type: 'javascript',
                fileName: 'index.js',
                code: `
                    import React from 'react';
                    import ReactDOM from 'react-dom';
                    import './index.css';
                    import App from './App';
                    import * as serviceWorker from './serviceWorker';
                    import {BrowserRouter} from 'react-router-dom'
                    import {createStore} from 'redux'
                    import {Provider} from 'react-redux'
                    import componentMetaReducer from './store/reducers/componentMeta'
                    
                    const store = createStore(componentMetaReducer)
                    
                    const app =(
                        <Provider store={store}>
                            <BrowserRouter>
                                <App />
                            </BrowserRouter>
                        </Provider>
                    )
                    
                    ReactDOM.render(app, document.getElementById('root'));
                    
                    // If you want your app to work offline and load faster, you can change
                    // unregister() to register() below. Note this comes with some pitfalls.
                    // Learn more about service workers: https://bit.ly/CRA-PWA
                    serviceWorker.unregister();
                `
            },
            {
                type: 'javascript',
                fileName: 'test.js',
                code: `
                import React, {Component} from 'react'
                import {connect} from 'react-redux'
                import Aux from '../../hoc/Auxilliry/Auxilliry'
                import {Redirect} from 'react-router-dom'
                import DetailReadme from './DetailReadme/DetailReadme'
                import classes from './Detail.module.css'
                import DetailComponent from './DetailComponent/DetailComponent'
                import DetailCode from './DetailCode/DetailCode'
                import codes from '../../ComponentLib/codes'
                
                class Detail extends Component{
                    state={
                        readme: null,
                        codes: codes.find(c=>c.name === this.props.match.params.id),
                        activeFile: null
                    }
                
                    componentDidMount(){
                        this.getReadme()
                        this.setState({
                            activeFile : this.state.codes.codes[0]
                        })
                    }
                
                    setActiveFile=(file)=>{
                        this.setState({
                            activeFile : file
                        })
                    }
                    
                    getReadme(){
                        if(!this.props.match.params) return
                        const readmePath = require(\`./READMEs/\${this.props.match.params.id}.md\`)
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
                `
            },
            {
                type: 'css',
                fileName: 'main.css',
                code: `
                    .DetailContent{
                        margin-top: 5vh;
                        display: flex;
                        width: 100%;
                        height: 70vh;
                        align-items: flex-start;
                        justify-content: space-between;
                    }
                    .rightCol{
                        width: 49%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                `
            }
        ]
    }
]