import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import registerServiceWorker from './registerServiceWorker';
/*Redux*/
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

const store = createStore(() => [], {}, applyMiddleware());


ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
);

registerServiceWorker();


