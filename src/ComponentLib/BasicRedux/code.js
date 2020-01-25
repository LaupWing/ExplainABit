
export default [
    {
        type: 'jsx',
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
        type: 'html',
        fileName: 'index.html',
        code:`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atelier-cave-dark.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="description"
            content="Web site created using create-react-app"
            />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
            <!--
            manifest.json provides metadata used when your web app is installed on a
            user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
            -->
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <!--
            Notice the use of %PUBLIC_URL% in the tags above.
            It will be replaced with the URL of the \`public\` folder during the build.
            Only files inside the \`public\` folder can be referenced from the HTML.
        
            Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
            work correctly both with client-side routing and a non-root public URL.
            Learn how to configure a non-root public URL by running \`npm run build\`.
            -->
            <title>React App</title>
        </head>
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root"></div>
            <!--
            This HTML file is a template.
            If you open it directly in the browser, you will see an empty page.
        
            You can add webfonts, meta tags, or analytics to this file.
            The build step will place the bundled scripts into the <body> tag.
        
            To begin the development, run \`npm start\` or \`yarn start\`.
            To create a production bundle, use \`npm run build\` or \`yarn build\`.
            -->
        </body>
        </html>
        `
    },
    {
        type: 'jsx',
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