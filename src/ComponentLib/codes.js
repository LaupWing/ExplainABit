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
                fileName: 'main.js',
                code: `
                    import React from 'react';
                    import ReactDOM from 'react-dom';
                    import './index.css';
                    import App from './App';
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