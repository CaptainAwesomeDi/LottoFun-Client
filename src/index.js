import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
//import rootReducer from './reducers'
//const store = createStore(rootReducer)
ReactDOM.render(
    <App/>, document.getElementById('root'));
registerServiceWorker();
